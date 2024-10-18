'use server';

import { redirect, RedirectType } from 'next/navigation';

import { SupabaseTable } from '@/features/shared/actions/supabaseTables';
import { supabaseClientManager } from '@/lib/SupabaseClientManager';

export const getCurrentUserRole = async () => {
  const supabase = supabaseClientManager.getPublicClient();
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

export const filterSupabase = (queryParams: { filter?: URLSearchParams | undefined }) => {
  const createFilterFromPair = ([key, value]: [string, string]) => {
    const keyFirstPartName = key.includes('role') ? 'role_id.' : 'user_id.';

    const newKey = key.includes('role')
      ? key.replace('filter[role]', 'role_id.slug')
      : key.replace('filter[', keyFirstPartName).replace(']', '');

    return { key: newKey, term: `%${value}%` };
  };

  const createPaginationFromPair = ([key, value]: [string, string]) => {
    const newKey = key.replace('pagination[', '').replace(']', '');
    return { key: newKey, term: value };
  };

  const filterObject: Record<string, string> = {};

  if (queryParams.filter) {
    queryParams.filter.forEach((value, key) => {
      filterObject[key] = value;
    });
  }
  return Object.entries(filterObject).reduce(
    (acc, [key, value]) => {
      if (key.startsWith('filter[')) {
        const { key: newKey, term } = createFilterFromPair([key, value]);
        acc[newKey] = term;
        return acc;
      }
      if (key.startsWith('pagination[')) {
        const { key: newKey, term } = createPaginationFromPair([key, value]);
        acc[newKey] = term;
        return acc;
      }
      return acc;
    },
    {} as Record<string, string>,
  );
};
