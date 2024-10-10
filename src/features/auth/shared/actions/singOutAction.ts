'use server';
import { cookies } from 'next/headers';
import { redirect, RedirectType } from 'next/navigation';

import { createClient } from '@/lib/server/server';

export const handleSignOut = async () => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { error } = await supabase.auth.signOut();

  if (error) {
    throw new Error('Error at logout');
  }

  redirect('/auth/login', RedirectType.push);
};
