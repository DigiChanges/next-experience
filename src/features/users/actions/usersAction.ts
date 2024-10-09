'use server';
import { cookies } from 'next/headers';
import { createClient } from '@/lib/server/server';
import { redirect, RedirectType } from 'next/navigation';

const getCookies = () => {
  const cookieStore = cookies();
  return createClient(cookieStore);
};

const getCurrentUser = async() => {
  const supabase = getCookies();
  const { data: { session }, error } = await supabase.auth.getSession();


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

export const getUsers = async({ queryParams }:any) => {
  const supabase = getCookies();
  const role = await getCurrentUser();

  if (queryParams){

  }

  if (role[0].role_id.slug !== 'admin'){
    throw new Error('You dont have the required permission to do this request');
  }

  const { data, error } = await supabase
      .from('users_has_roles')
      .select('*, user_id!inner(*), role_id!inner(*)');

  if (error) {
    throw new Error(`Error at getting the users: ${error.message}`);
  }

  if (!data) {
    redirect('/auth/login', RedirectType.push);
  }

  const formatedUsers = data.map(user => ({
    id: user.user_id.id,
    image_id: user.user_id.image_id,
    phone: null,
    email: user.user_id.email,
    last_name: user.user_id.last_name,
    first_name: user.user_id.first_name,
    role: user.role_id.name
  }));

  return { data: formatedUsers, pagination: { currentPage: 1, totalPages: 1, totalCount: 1 } };
};

export const deleteUser = async(id: string) => {
  const supabase = getCookies();
  const role = await getCurrentUser();

  if (role[0].role_id === 'admin'){
    throw new Error('You dont have the required permission to do this request');
  }

  const { error } = await supabase.auth.admin.deleteUser(id);

  if (error) {
    throw new Error(`Error at deleting the user: ${error.message}`);
  }
};


export const getAll = async(payload: { table: any; queryParams: { filter: string[]; }; orderBy: { key: any; ascending: any; }; }) => {
  try {
    const supabase = getCookies();
    let query = supabase.from(payload.table).select();

    if (payload.queryParams) {
      const filterConditions = useFilterSupabase(payload.queryParams);

      Object.entries(filterConditions).forEach(([column, value]) => {
        query = query.eq(column, value);
      });
    }

    if (payload.orderBy) {
      query = query.order(payload.orderBy.key, { ascending: payload.orderBy.ascending });
    }

    return await query;
  } catch (error) {
    throw new Error(`Error at getting items from ${payload.table}, error: ${error}`);
  }
};
export const useFilterSupabase = (queryParams: { filter: string[]; }) => {
  const createFilterFromPair = ([key, value]: [string, string]) => {
    const newKey = key.replace('filter[', '').replace(']', '');
    return { key: newKey, term: value };
  };

  const filterObject: Record<string, string> = {};

  if (queryParams.filter) {
    queryParams.filter.forEach((value: string, key: string | number) => {
      filterObject[key] = value;
    });
  }
  return Object.entries(filterObject).reduce((acc, [key, value]) => {
    const { key: newKey, term } = createFilterFromPair([key, value as string]);
    acc[newKey] = term;
    return acc;
  }, {} as Record<string, string>);
};

