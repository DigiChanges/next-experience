'use server';
import { redirect, RedirectType } from 'next/navigation';

import { supabaseClientManager } from '@/lib/SupabaseClientManager';

// import { ProfileType as IProfileType } from '@/features/profile/interfaces/profileResponse';

export const getSession = async () => {
  const supabase = supabaseClientManager.getPublicClient();

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
  phone?: number;
};

export const updateUser = async (data: UpdatedUser, id: string) => {
  const supabase = supabaseClientManager.getPublicClient();
  const phone = data.phone ? data.phone.toString() : null;
  const { error } = await supabase
    .from('profiles')
    .update({
      first_name: data.first_name,
      last_name: data.last_name,
      phone,
    })
    .eq('id', id);

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
  const supabase = supabaseClientManager.getPublicClient();

  const { error } = await supabase
    .from('profiles')
    .update({
      image_id: props.image_id,
    })
    .eq('id', props.id);

  if (error) {
    throw new Error('Error updating the user image');
  }

  redirect('/dashboard', RedirectType.push);
};
