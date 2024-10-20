'use server';

import { PostgrestSingleResponse } from '@supabase/supabase-js';
import { redirect } from 'next/navigation';
import { NextResponse } from 'next/server';

import { getSession } from '@/features/profile/actions/ProfileAction';
import { getPaginatedSupabaseQuery, SupabasePagination } from '@/features/shared/actions/supabase/getPaginatedEntity';
import { SupabaseTable } from '@/features/shared/constants/supabaseTables';
import { Role } from '@/features/shared/interfaces/Role';
import { UserHasRole } from '@/features/shared/interfaces/UserHasRole';
import { getCurrentUserRole } from '@/features/users/actions/usersAction';
import { supabaseServerClientManager } from '@/lib/SupabaseServerClientManager';
import { QueryParams } from '@/service/IHttpParams';

type Props = {
  queryParams: QueryParams;
};

export const fetchUser = async (id?: string): Promise<UserHasRole> => {
  const supabase = supabaseServerClientManager.getServerPublicClient();
  const session = await getSession();
  const userId = id || session?.id;

  if (!userId) {
    throw new Error('User ID not provided and no active session');
  }

  const { data, error }: PostgrestSingleResponse<UserHasRole> = await supabase
    .from(SupabaseTable.USER_HAS_ROLES)
    .select('*, user_id!inner(*), role_id!inner(*)')
    .eq('user_id', userId)
    .single();

  if (error) throw new Error('Error al obtener el usuario');

  return data;
};

export const listUsers = async (props: Props): Promise<NextResponse | SupabasePagination<UserHasRole>> => {
  const supabase = supabaseServerClientManager.getServerPublicClient();
  const currentUserRole = await getCurrentUserRole();

  if (currentUserRole[0].role_id.slug !== Role.ADMIN) {
    return redirect('/unauthorized');
  }

  return getPaginatedSupabaseQuery<UserHasRole>({
    supabase,
    table: SupabaseTable.USER_HAS_ROLES,
    queryParams: props.queryParams,
    select: '*, user_id!inner(*), role_id!inner(*)',
  });
};
