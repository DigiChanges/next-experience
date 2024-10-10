'use server';
import { cookies } from 'next/headers';

import { env } from '@/config/api';
import { createClient } from '@/lib/server/server';
export const handleRecoverPassword = async (username: string) => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { error } = await supabase.auth.resetPasswordForEmail(username, {
    redirectTo: `${env.urlFront}/auth/update-password`,
  });

  if (error) {
    throw new Error('Error at recover password, ', error);
  }
};
