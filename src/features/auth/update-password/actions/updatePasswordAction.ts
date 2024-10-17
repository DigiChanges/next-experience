'use server';

import { redirect, RedirectType } from 'next/navigation';

import { getSupabaseClient } from '@/lib/public/publicClient';

export const handleUpdatePassword = async (password: string, code: string) => {
  const supabase = getSupabaseClient();

  await supabase.auth.exchangeCodeForSession(code);

  const { error } = await supabase.auth.updateUser({
    password,
  });
  if (error) {
    throw new Error('Error at updating the password', error);
  }
  redirect('/auth/login', RedirectType.push);
};
