'use server';
import { cookies } from 'next/headers';
import { redirect, RedirectType } from 'next/navigation';

import { getLang } from '@/features/shared/hooks/getLang';
import { createClient } from '@/lib/server/server';

import { ILoginForm } from '../interfaces/IloginForm';

export const handleSignIn = async (data: ILoginForm) => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
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
