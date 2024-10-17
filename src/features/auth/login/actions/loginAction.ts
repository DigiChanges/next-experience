'use server';

import { redirect, RedirectType } from 'next/navigation';

import { getLang } from '@/features/shared/hooks/getLang';
import { getSupabaseClient } from '@/lib/public/publicClient';

import { ILoginForm } from '../interfaces/IloginForm';

export const handleSignIn = async (data: ILoginForm) => {
  const supabase = getSupabaseClient();
  const { lang } = getLang();

  const { error } = await supabase.auth.signInWithPassword({
    email: data.username,
    password: data.password,
  });
  if (error) {
    throw new Error('Authentication failed');
  }
  if (!error) {
    return redirect(`/${lang}/dashboard`, RedirectType.push);
  }
};
