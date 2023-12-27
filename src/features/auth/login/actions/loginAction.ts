'use server';
import { ILoginForm } from '../interfaces/IloginForm';
import { cookies } from 'next/headers';
import { createClient } from '@/lib/server/server';
import { redirect, RedirectType } from 'next/navigation';
import {useGetLang} from "@/features/shared/hooks/useGetLang";

export const handleSignIn = async(data : ILoginForm) => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const {lang} = useGetLang()

  const { error } = await supabase.auth.signInWithPassword({
    email: data.username,
    password: data.password
  });
  if (error){
    throw new Error('Authentication failed');
  }
  if (!error) {
    return redirect(`/${lang}/dashboard`, RedirectType.push);
  }
};

