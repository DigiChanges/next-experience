'use server';
import { cookies } from 'next/headers';

import { redirect, RedirectType } from 'next/navigation';

import { createClient } from '@/lib/server/server';

const getCookies = () => {
  const cookieStore = cookies();
  return createClient(cookieStore);
};

const getCurrentUser = async () => {
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
  const role = await getCurrentUser();

  if (role[0].role_id === 'admin') {
    throw new Error('You dont have the required permission to do this request');
  }

  const { error } = await supabase.auth.admin.deleteUser(id);

  if (error) {
    throw new Error(`Error at deleting the user: ${error.message}`);
  }
};

export const getUsers = async ({ queryParams }: any) => {
  try {
    const supabase = getCookies();
    const role = await getCurrentUser();

    if (role[0].role_id.slug !== 'admin') {
      throw new Error('You dont have the required permission to do this request');
    }

    let query = supabase.from('users_has_roles').select('*, user_id!inner(*), role_id!inner(*)', { count: 'exact' });

    const pagination = {
      offset: 0,
      limit: 2,
    };

    if (queryParams) {
      const filterConditions = filterSupabase(queryParams);

      pagination.offset = Number(filterConditions.offset) || 0;
      pagination.limit = Number(filterConditions.limit) || 2;

      const filters: Record<string, string> = Object.entries(filterConditions).reduce(
        (acc, [key, value]) => {
          if (key === 'offset' || key === 'limit') {
            return acc;
          }
          acc[key] = value;
          return acc;
        },
        {} as Record<string, string>,
      );

      Object.entries(filters).forEach(([column, value]) => {
        query = query.ilike(column, value);
      });
    }

    query = query.range(pagination.offset, pagination.limit);

    const { data, count, error } = await query;

    if (error) {
      console.error('Error at getting all users', error);
    }

    if (!data) {
      console.error('Error at getting all users', error);
    }

    const formatedUsers = data
      ? data.map((user) => ({
          id: user.user_id.id,
          image_id: user.user_id.image_id,
          phone: null,
          email: user.user_id.email,
          last_name: user.user_id.last_name,
          first_name: user.user_id.first_name,
          role: user.role_id.name,
        }))
      : [];

    const paginationResponse =
      data && count
        ? {
            total: count,
            offset: pagination.offset,
            limit: pagination.limit,
            perPage: 2,
            currentPage: Math.ceil(pagination.offset / pagination.limit) + 1,
            lastPage: Math.ceil(count / (pagination.limit + 1)),
            from: 0,
            to: 2,
            path: '',
            firstUrl: '',
            lastUrl: '',
            nextUrl: '',
            prevUrl: '',
            currentUrl: '',
          }
        : {
            total: 1,
            offset: 0,
            limit: 0,
            perPage: 0,
            currentPage: 1,
            lastPage: 1,
            from: 0,
            to: 0,
            path: '',
            firstUrl: '',
            lastUrl: '1',
            nextUrl: '',
            prevUrl: '',
            currentUrl: '',
          };

    return {
      data: formatedUsers,
      pagination: paginationResponse,
    };
  } catch (error) {
    throw new Error(`Error at getting users, error: ${error}`);
  }
};
export const filterSupabase = (queryParams: { filter: any[] }) => {
  const createFilterFromPair = ([key, value]: [string, string]) => {
    const keyFirstPartName = key.includes('role') ? 'role_id.' : 'user_id.';
    const newKey = key.includes('role')
      ? key.replace('filter[role]', 'slug')
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
