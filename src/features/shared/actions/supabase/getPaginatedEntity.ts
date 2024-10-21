import { SupabaseClient } from '@supabase/supabase-js';

import { SupabaseTable } from '@/features/shared/constants/supabaseTables';
import { filterSupabase } from '@/features/shared/helpers/supabase/createFilterSupabase';
import { QueryParams } from '@/service/IHttpParams';

export interface SupabasePagination<T> {
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
  };
}

type GetPaginatedSupabaseQueryPayload = {
  supabase: SupabaseClient;
  table: SupabaseTable;
  queryParams: QueryParams;
  select: string;
};

export async function getPaginatedSupabaseQuery<T>(
  payload: GetPaginatedSupabaseQueryPayload,
): Promise<SupabasePagination<T>> {
  const { table, queryParams, supabase, select } = payload;

  if (!queryParams?.filter || !queryParams?.pagination) {
    throw new Error('Invalid query params: both filter and pagination must be defined');
  }

  const { offset, limit } = queryParams.pagination;

  const numericOffset = Number(offset);
  const numericLimit = Number(limit);

  if (isNaN(numericOffset) || isNaN(numericLimit) || numericOffset < 0 || numericLimit <= 0) {
    throw new Error('Invalid pagination parameters: offset and limit must be non-negative numbers');
  }

  let query = supabase.from(table).select(select, { count: 'exact' });

  const filterConditions = filterSupabase(queryParams);

  Object.entries(filterConditions).map(async ([column, value]) => {
    query = query.ilike(column, `%${value}%`);
  });

  query = query.range(numericOffset, numericOffset + numericLimit - 1);

  const { data, count, error } = await query;

  if (error) {
    throw new Error(`Supabase query error: ${error.message}`);
  }

  const totalCount = count ?? 0;

  const paginationResponse: SupabasePagination<T> = {
    data: data as T[],
    pagination: {
      total: totalCount,
      offset: numericOffset,
      limit: numericLimit,
      perPage: numericLimit,
      currentPage: Math.floor(numericOffset / numericLimit) + 1,
      lastPage: Math.ceil(totalCount / numericLimit),
      from: numericOffset + 1,
      to: Math.min(numericOffset + numericLimit, totalCount),
    },
  };

  return paginationResponse;
}
