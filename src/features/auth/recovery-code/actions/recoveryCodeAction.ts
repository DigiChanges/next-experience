'use server';
import { IrecoveryCode } from '../interfaces/IrecoveryCode';
import { cookies } from 'next/headers';
import { createClient } from '@/lib/server/server';
import { redirect, RedirectType } from 'next/navigation';
import { useGetLang } from '@/features/shared/hooks/useGetLang';

export const handleRecoveryCode = async(email: string, data: IrecoveryCode) => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { lang } = useGetLang();

  const { error } = await supabase.auth.verifyOtp({ email, token: data.code, type: 'recovery' });

  // const { error } = await supabase.auth.signInWithPassword({
  //   code: data.code
  // });

  if (error){
    throw new Error('Authentication failed', error);
  }
  return redirect(`/${lang}/dashboard`, RedirectType.push);
};

