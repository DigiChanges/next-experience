'use server';

import { redirect, RedirectType } from 'next/navigation';

import { supabaseClientManager } from '@/lib/SupabaseClientManager';

export const handleSignOut = async () => {
  const supabase = supabaseClientManager.getPublicClient();

  const { error } = await supabase.auth.signOut();

  if (error) {
    throw new Error('Error at logout');
  }

  redirect('/auth/login', RedirectType.push);
};
