'use server';

import { env } from '@/config/api';
import { getSupabaseClient } from '@/lib/public/publicClient';

export const handleRecoverPassword = async (username: string) => {
  const supabase = getSupabaseClient();

  const { error } = await supabase.auth.resetPasswordForEmail(username, {
    redirectTo: `${env.urlFront}/auth/update-password`,
  });

  if (error) {
    throw new Error('Error at recover password, ', error);
  }
};
