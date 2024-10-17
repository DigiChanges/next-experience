'use server';

import { redirect, RedirectType } from 'next/navigation';

import { getSupabaseClient } from '@/lib/public/publicClient';

export const handleSignOut = async () => {
  const supabase = getSupabaseClient();

  const { error } = await supabase.auth.signOut();

  if (error) {
    throw new Error('Error at logout');
  }

  redirect('/auth/login', RedirectType.push);
};
