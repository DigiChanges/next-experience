'use server';
import { cookies } from 'next/headers';
import { redirect, RedirectType } from 'next/navigation';

import { env } from '@/config/api';
import { createClient } from '@/lib/server/server';

import { ILoginForm } from '../../login/interfaces/IloginForm';

export const handleSignUp = async ({ username, password }: ILoginForm) => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { error } = await supabase.auth.signUp({
    email: username,
    password,
    options: {
      emailRedirectTo: `${env.urlFront}/api/auth/callback`,
    },
  });

  if (error) {
    throw new Error('Authentication failed');
  }
  if (!error) {
    return redirect('/auth/login', RedirectType.push);
  }
};
