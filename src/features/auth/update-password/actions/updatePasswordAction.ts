'use server';

import { redirect, RedirectType } from 'next/navigation';

import { supabaseClientManager } from '@/lib/SupabaseClientManager';

export const handleUpdatePassword = async (password: string, code: string) => {
  const supabase = supabaseClientManager.getPublicClient();

  await supabase.auth.exchangeCodeForSession(code);

  const { error } = await supabase.auth.updateUser({
    password,
  });
  if (error) {
    throw new Error('Error at updating the password', error);
  }
  redirect('/auth/login', RedirectType.push);
};
