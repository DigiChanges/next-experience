'use server';

import { env } from '@/config/api';
import { supabaseServerClientManager } from '@/lib/SupabaseServerClientManager';

export const handleRecoverPassword = async (username: string) => {
  const supabase = supabaseServerClientManager.getServerPublicClient();

  const { error } = await supabase.auth.resetPasswordForEmail(username, {
    redirectTo: `${env.urlFront}/auth/update-password`,
  });

  if (error) {
    throw new Error('Error at recover password, ', error);
  }
};
