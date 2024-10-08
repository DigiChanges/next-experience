'use server';
import { cookies } from 'next/headers';
import { createClient } from '@/lib/server/server';
import { redirect, RedirectType } from 'next/navigation';

export const handleUpdatePassword = async(password: string, code: string) => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  await supabase.auth.exchangeCodeForSession(code);

  const { error } = await supabase.auth.updateUser({
    password
  });
  if (error) {
    throw new Error('Error at updating the password', error);
  }
  redirect('/auth/login', RedirectType.push);
};
