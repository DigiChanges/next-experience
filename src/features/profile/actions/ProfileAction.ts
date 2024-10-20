'use server';
import { redirect, RedirectType } from 'next/navigation';

import { updateRole } from '@/features/shared/actions/roleActions';
import { SupabaseTable } from '@/features/shared/constants/supabaseTables';
import { supabaseServerClientManager } from '@/lib/SupabaseServerClientManager';

export const getSession = async () => {
  const supabase = supabaseServerClientManager.getServerPublicClient();

  const { data, error } = await supabase.auth.getSession();
  const user = data?.session?.user;

  if (error) {
    throw new Error('Error at getting the user', error);
  }
  if (!user) {
    redirect('/auth/login', RedirectType.push);
  } else {
    return user;
  }
};

type UpdatedUser = {
  first_name?: string;
  last_name?: string;
  phone?: string;
  role?: string;
  account_active?: boolean;
};

export const updateUser = async (data: UpdatedUser, id: string) => {
  const supabase = supabaseServerClientManager.getServerPublicClient();
  const phone = data.phone ? data.phone.toString() : null;

  const { error } = await supabase
    .from(SupabaseTable.PROFILES)
    .update({
      first_name: data.first_name,
      last_name: data.last_name,
      account_active: data.account_active,
      phone,
    })
    .eq('id', id);

  if (data.role) {
    await updateRole({ user_id: id, role_id: data.role });
  }

  if (error) {
    throw new Error('Error updating the user');
  }

  redirect('/dashboard', RedirectType.push);
};

type UpdatedUserImage = {
  id: string;
  image_id?: string | null | undefined;
};

export const updateUserImage = async (props: UpdatedUserImage) => {
  const supabase = supabaseServerClientManager.getServerPublicClient();

  const { error } = await supabase
    .from(SupabaseTable.PROFILES)
    .update({
      image_id: props.image_id,
    })
    .eq('id', props.id);

  if (error) {
    throw new Error('Error updating the user image');
  }
};
