'use server';

import { redirect, RedirectType } from 'next/navigation';

import { getLang } from '@/features/shared/hooks/getLang';

import { supabaseClientManager } from '@/lib/SupabaseClientManager';

import { IrecoveryCode } from '../interfaces/IrecoveryCode';

export const handleRecoveryCode = async (email: string, data: IrecoveryCode) => {
  const supabase = supabaseClientManager.getPublicClient();
  const { lang } = getLang();

  const { error } = await supabase.auth.verifyOtp({ email, token: data.code, type: 'recovery' });

  if (error) {
    throw new Error('Authentication failed', error);
  }
  return redirect(`/${lang}/dashboard`, RedirectType.push);
};
