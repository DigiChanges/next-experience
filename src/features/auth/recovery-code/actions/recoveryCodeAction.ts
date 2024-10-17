'use server';

import { redirect, RedirectType } from 'next/navigation';

import { getLang } from '@/features/shared/hooks/getLang';
import { getSupabaseClient } from '@/lib/public/publicClient';

import { IrecoveryCode } from '../interfaces/IrecoveryCode';

export const handleRecoveryCode = async (email: string, data: IrecoveryCode) => {
  const supabase = getSupabaseClient();
  const { lang } = getLang();

  const { error } = await supabase.auth.verifyOtp({ email, token: data.code, type: 'recovery' });

  if (error) {
    throw new Error('Authentication failed', error);
  }
  return redirect(`/${lang}/dashboard`, RedirectType.push);
};
