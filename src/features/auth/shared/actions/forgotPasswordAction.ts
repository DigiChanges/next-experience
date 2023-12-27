'use server';
import { cookies } from 'next/headers';
import { createClient } from '@/lib/server/server';
import { redirect, RedirectType } from 'next/navigation';
import { env } from '@/config/api';
export const handleRecoverPassword = async(username: string) => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { error } = await supabase.auth.resetPasswordForEmail(username, {
    redirectTo: `${env.urlFront}/auth/update-password`
  });

  if (error) {
    throw new Error('Error at logout');
  }

  redirect('/auth/login', RedirectType.push);
};
