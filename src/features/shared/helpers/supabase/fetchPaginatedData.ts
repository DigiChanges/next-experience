import { SupabaseClient } from '@supabase/supabase-js';

import { SupabaseTable } from '@/features/shared/constants/supabaseTables';
import { filterSupabase } from '@/features/users/actions/usersAction';

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    total: number;
    offset: number;
    limit: number;
    perPage: number;
    currentPage: number;
    lastPage: number;
    from: number;
    to: number;
    path: string;
    firstUrl: string;
    lastUrl: string;
    nextUrl: string;
    prevUrl: string;
    currentUrl: string;
  };
}

interface QueryParams {
  filter?: URLSearchParams | undefined;
}

type Props = {
  queryParams?: QueryParams;
};

type GetPaginatedSupabaseQueryPayload = {
  supabase: SupabaseClient;
  table: SupabaseTable;
  props?: Props;
  select: string;
};

export async function getPaginatedSupabaseQuery<T>(
  payload: GetPaginatedSupabaseQueryPayload,
): Promise<PaginatedResponse<T>> {
  const { table, props, supabase, select } = payload;

  let query = supabase.from(table).select(select, { count: 'exact' });

  const pagination = {
    offset: 0,
    limit: 10,
  };

  if (props && props.queryParams) {
    const filterConditions = filterSupabase(props.queryParams);

    Object.entries(filterConditions).forEach(([column, value]) => {
      console.log(column, value);
      query = query.eq(column, value);
    });

    pagination.offset = Number(filterConditions.offset) || 0;
    pagination.limit = Number(filterConditions.limit) || 2;
  }

  query = query.range(pagination.offset, pagination.offset + pagination.limit - 1);

  const { data, count } = await query;

  const paginationResponse: PaginatedResponse<T> = {
    data: data as T[],
    pagination: {
      total: count || 0,
      offset: pagination.offset,
      limit: pagination.limit,
      perPage: pagination.limit,
      currentPage: Math.floor(pagination.offset / pagination.limit) + 1,
      lastPage: Math.ceil((count || 0) / pagination.limit),
      from: pagination.offset + 1,
      to: Math.min(pagination.offset + pagination.limit, count || 0),
      path: '',
      firstUrl: '',
      lastUrl: '',
      nextUrl: '',
      prevUrl: '',
      currentUrl: '',
    },
  };

  return paginationResponse;
}
