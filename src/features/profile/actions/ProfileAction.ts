'use server';
import { redirect, RedirectType } from 'next/navigation';

import { ProfileType as IProfileType } from '@/features/profile/interfaces/profileResponse';
import { getSupabaseClient, getSupabaseClientServer } from '@/lib/server/server';

export const getSession = async () => {
  const supabase = getSupabaseClient();

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

type NewUserByAdmin = {
  email: string;
  password: string;
  account_active: boolean;
};

export const addNewUserByAdmin = async ({ email, password, account_active }: NewUserByAdmin) => {
  const supabase = getSupabaseClientServer();

  if (account_active) {
    const { error } = await supabase.auth.admin.createUser({
      email: email,
      password: password,
      email_confirm: true,
    });

    if (error) {
      console.log(error);
    }
  } else {
    const { error: createError } = await supabase.auth.admin.createUser({
      email: email,
      password: password,
    });

    if (createError) {
      console.log(createError);
    }

    const { error: SendError } = await supabase.auth.resend({
      type: 'signup',
      email: email,
      options: {
        emailRedirectTo: 'https://example.com/welcome',
      },
    });

    if (SendError) {
      console.log(SendError);
    }
  }
};

type UpdatedUserByThemselves = {
  id: string;
  first_name: string | null;
  last_name: string | null;
  phone: string | null;
  email: string | null;
  image_id: string | null | undefined;
};

export const uploadUser = async (props: UpdatedUserByThemselves) => {
  const supabase = getSupabaseClient();

  const { error } = await supabase
    .from('profiles')
    .update({
      first_name: props.first_name,
      last_name: props.last_name,
      phone: props.phone,
      email: props.email,
      image_id: props.image_id,
    })
    .eq('id', props.id);

  if (error) {
    console.log(error);
  }

  redirect('/dashboard', RedirectType.push);
};
