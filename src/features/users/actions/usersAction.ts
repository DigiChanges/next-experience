'use server';
import { cookies } from 'next/headers';

import { redirect, RedirectType } from 'next/navigation';

import { createClient } from '@/lib/server/server';

const getCookies = () => {
  const cookieStore = cookies();
  return createClient(cookieStore);
};

export const getCurrentUserRole = async () => {
  const supabase = getCookies();
  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();

  const { data } = await supabase
    .from('users_has_roles')
    .select('*, user_id!inner(*), role_id!inner(*)')
    .eq('user_id', session?.user.id);

  if (error) {
    redirect('/auth/login', RedirectType.push);
  }

  if (data) {
    return data;
  } else {
    throw new Error('Error at getting the current user');
  }
};

export const deleteUser = async (id: string) => {
  const supabase = getCookies();
  const role = await getCurrentUserRole();

  if (role[0].role_id === 'admin') {
    throw new Error('You dont have the required permission to do this request');
  }

  const { error } = await supabase.auth.admin.deleteUser(id);

  if (error) {
    throw new Error(`Error at deleting the user: ${error.message}`);
  }
};

export const filterSupabase = (queryParams: { filter: any[] }) => {
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
