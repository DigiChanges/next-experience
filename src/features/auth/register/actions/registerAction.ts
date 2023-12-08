'use server';
import { ILoginForm } from '../../login/interfaces/IloginForm';
import { cookies } from 'next/headers';
import { createClient } from '@/lib/server/server';
import { redirect, RedirectType } from 'next/navigation';


export const handleSignUp = async({ username, password } : ILoginForm) => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { error } = await supabase.auth.signUp({
    email: username,
    password,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_URL_FRONT}/api/auth/callback`
    }
  });
  if (error){
    throw new Error('Authentication failed');
  }
  if (!error) {
    return redirect('/auth/login', RedirectType.push);
  }
};
