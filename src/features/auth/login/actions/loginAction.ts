'use server';
import { ILoginForm } from '../interfaces/IloginForm';
import { cookies } from 'next/headers';
import { createClient } from '@/lib/server/server';
import { redirect, RedirectType } from 'next/navigation';

export const handleSignIn = async(data : ILoginForm) => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { error } = await supabase.auth.signInWithPassword({
    email: data.username,
    password: data.password
  });

  if (!error) {
    return redirect('/', RedirectType.push);
  }
};

