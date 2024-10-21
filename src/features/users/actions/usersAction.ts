'use server';

import { redirect, RedirectType } from 'next/navigation';

import { SupabaseTable } from '@/features/shared/constants/supabaseTables';
import { supabaseServerClientManager } from '@/lib/SupabaseServerClientManager';

export const getCurrentUserRole = async () => {
  const supabase = supabaseServerClientManager.getServerPublicClient();
  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();

  const { data } = await supabase
    .from(SupabaseTable.USER_HAS_ROLES)
    .select('*, user_id!inner(*), role_id!inner(*)')
    .eq('user_id', session?.user.id);

  if (error) {
    redirect('/auth/login', RedirectType.push);
  }

  if (data) {
    return data;
  } else {
    throw new Error('Error at getting the current user role');
  }
};
