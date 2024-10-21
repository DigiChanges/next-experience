'use server';

import { redirect, RedirectType } from 'next/navigation';

import { supabaseServerClientManager } from '@/lib/SupabaseServerClientManager';

export const handleUpdatePassword = async (password: string, code: string) => {
  const supabase = supabaseServerClientManager.getServerPublicClient();

  await supabase.auth.exchangeCodeForSession(code);

  const { error } = await supabase.auth.updateUser({
    password,
  });
  if (error) {
    throw new Error('Error at updating the password', error);
  }
  redirect('/auth/login', RedirectType.push);
};
