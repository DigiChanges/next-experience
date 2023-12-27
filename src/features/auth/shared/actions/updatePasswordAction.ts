'use server';
import { cookies } from 'next/headers';
import { createClient } from '@/lib/server/server';
import { redirect, RedirectType } from 'next/navigation';

export const handleUpdatePassword = async(password: string, code: string) => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const session = await supabase.auth.exchangeCodeForSession(code);
  console.log(session);
  const { error } = await supabase.auth.updateUser({
    email: 'alexisgraff123@gmail.com',
    password
  });
  if (error) {
    console.log(error);
    throw new Error('Error at updating the password');
  }

  redirect('/auth/login', RedirectType.push);
};
