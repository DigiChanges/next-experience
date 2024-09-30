'use server';
import { cookies } from 'next/headers';
import { createClient } from '@/lib/server/server';
import { redirect, RedirectType } from 'next/navigation';

export const getUser = async() => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data: { user }, error } = await supabase.auth.getUser();

  if (error) {
    throw new Error('Error at updating the password', error);
  }
  if (!user) {
    redirect('/auth/login', RedirectType.push);
  } else {
    return user;
  }
};
