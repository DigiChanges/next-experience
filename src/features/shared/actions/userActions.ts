'use server';

import { PostgrestSingleResponse } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

import { getSession } from '@/features/profile/actions/ProfileAction';
import { SupabaseTable } from '@/features/shared/constants/supabaseTables';
import { getPaginatedSupabaseQuery, PaginatedResponse } from '@/features/shared/helpers/supabase/fetchPaginatedData';
import { Role } from '@/features/shared/interfaces/Role';
import { UserHasRole } from '@/features/shared/interfaces/UserHasRole';
import { getCurrentUserRole } from '@/features/users/actions/usersAction';
import { supabaseServerClientManager } from '@/lib/SupabaseServerClientManager';

interface QueryParms {
  filter?: URLSearchParams | undefined;
}

type Props = {
  queryParams?: QueryParms;
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

export const listUsers = async (props?: Props): Promise<NextResponse | PaginatedResponse<UserHasRole>> => {
  const supabase = supabaseServerClientManager.getServerPublicClient();
  const currentUserRole = await getCurrentUserRole();

  if (currentUserRole[0].role_id.slug !== Role.ADMIN) {
    return NextResponse.json(
      { error: "You don't have the required permission to perform this request" },
      { status: 401 },
    );
  }

  return getPaginatedSupabaseQuery<UserHasRole>({
    supabase,
    table: SupabaseTable.USER_HAS_ROLES,
    props: props,
    select: '*, user_id!inner(*), role_id!inner(*)',
  });
};
