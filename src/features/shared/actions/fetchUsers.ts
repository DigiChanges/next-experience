'use server';

import { getSession } from '@/features/profile/actions/ProfileAction';
import { handleGetFile } from '@/features/shared/actions/fileAction';
import { filterSupabase, getCurrentUserRole } from '@/features/users/actions/usersAction';
import { getSupabaseClient } from '@/lib/server/server';

export interface User {
  id: string;
  image_id: string | null;
  phone: string | null;
  email: string | null;
  last_name: string | null;
  first_name: string | null;
  role: string | null;
}

export interface PaginatedResponse {
  data: User[];
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

interface QueryParms {
  filter?: URLSearchParams | undefined;
}

type Props = {
  queryParams?: QueryParms;
};

export const fetchUser = async (): Promise<User> => {
  const supabase = getSupabaseClient();
  const user = await getSession();

  if (user && user.id) {
    const { data, error } = await supabase.from('profiles').select().eq('id', user.id);

    if (error) {
      throw new Error('Error at getting the user');
    }

    let image = data[0]?.image_id ?? null;
    if (image) {
      image = await handleGetFile(image);
      image = image?.path;
    }

    return {
      id: user.id,
      image_id: image,
      phone: data[0]?.phone ?? null,
      email: data[0]?.email ?? null,
      last_name: data[0]?.last_name,
      first_name: data[0]?.first_name,
      role: 'operator',
    };
  } else {
    throw new Error('User not found');
  }
};

export const fetchUsers = async (props?: Props): Promise<PaginatedResponse> => {
  const supabase = getSupabaseClient();
  const currentUserRole = await getCurrentUserRole();

  if (currentUserRole[0].role_id.slug !== 'admin') {
    throw new Error("You don't have the required permission to perform this request");
  }

  let query = supabase.from('users_has_roles').select('*, user_id!inner(*), role_id!inner(*)', { count: 'exact' });

  const pagination = {
    offset: 0,
    limit: 2,
  };

  if (props && props.queryParams) {
    const filterConditions = filterSupabase(props.queryParams);

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

  const formattedUsers = data
    ? data.map((user) => ({
        id: user.user_id.id,
        image_id: user.user_id.image_id,
        phone: user.user_id.phone,
        email: user.user_id.email,
        last_name: user.user_id.last_name,
        first_name: user.user_id.first_name,
        role: user.role_id.name,
      }))
    : [];

  const paginationResponse: PaginatedResponse = {
    data: formattedUsers,
    pagination: {
      total: count || 0,
      offset: pagination.offset,
      limit: pagination.limit,
      perPage: pagination.limit,
      currentPage: Math.ceil(pagination.offset / pagination.limit) + 1,
      lastPage: Math.ceil((count || 0) / pagination.limit - 1),
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
};
