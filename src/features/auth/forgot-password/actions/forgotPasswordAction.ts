'use server';

import { env } from '@/config/api';
import { supabaseClientManager } from '@/lib/SupabaseClientManager';

export const handleRecoverPassword = async (username: string) => {
  const supabase = supabaseClientManager.getPublicClient();

  const { error } = await supabase.auth.resetPasswordForEmail(username, {
    redirectTo: `${env.urlFront}/auth/update-password`,
  });

  if (error) {
    throw new Error('Error at recover password, ', error);
  }
};
