'use server';

import { redirect, RedirectType } from 'next/navigation';

import { supabaseServerClientManager } from '@/lib/SupabaseServerClientManager';

export const handleSignOut = async () => {
  const supabase = supabaseServerClientManager.getServerPublicClient();

  const { error } = await supabase.auth.signOut();

  if (error) {
    throw new Error('Error at logout');
  }

  redirect('/auth/login', RedirectType.push);
};
