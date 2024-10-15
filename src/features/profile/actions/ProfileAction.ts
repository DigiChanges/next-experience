'use server';
import { cookies } from 'next/headers';
import { redirect, RedirectType } from 'next/navigation';

import { createClient } from '@/lib/server/server';

const getCookies = () => {
  const cookieStore = cookies();
  return createClient(cookieStore);
};

export const getSession = async () => {
  const supabase = getCookies();

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

export const uploadUser = async (image_id: string | null | undefined, id: string) => {
  const supabase = getCookies();

  await supabase.from('profiles').update({ image_id }).eq('id', id);

  redirect('/dashboard', RedirectType.push);
};
