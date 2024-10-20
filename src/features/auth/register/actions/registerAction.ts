'use server';

import { redirect, RedirectType } from 'next/navigation';

import { env } from '@/config/api';
import { IRegisterForm } from '@/features/auth/register/interfaces/IRegisterForm';
import { supabaseServerClientManager } from '@/lib/SupabaseServerClientManager';

export const handleSignUp = async (props: IRegisterForm) => {
  const supabase = supabaseServerClientManager.getServerPublicClient();

  const { error } = await supabase.auth.signUp({
    email: props.email,
    password: props.password,
    options: {
      data: {
        first_name: props.name,
        last_name: props.lastname,
        phone: props.phone ? props.phone.toString() : null,
      },
      emailRedirectTo: `${env.urlFront}/api/auth/callback`,
    },
  });

  if (error) {
    throw new Error('Authentication failed');
  } else {
    return redirect('/auth/login', RedirectType.push);
  }
};
