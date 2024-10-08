'use server';
import { cookies } from 'next/headers';
import { createClient, createPrivateClient } from '@/lib/server/server';
import { redirect, RedirectType } from 'next/navigation';

const getCookies = () => {
  const cookieStore = cookies();
  return createClient(cookieStore);
};

const getPrivateCookies = () => {
  const cookieStore = cookies();
  return createPrivateClient(cookieStore);
};

const getUserRole = async(roles: any[]) => {
  const supabase = getCookies();
  const { data } = await supabase
      .from('roles')
      .select('slug')
      .eq('id', roles[0]?.role_id);

  return data ? data[0]?.slug : null;
};

const getCurrentUser = async() => {
  const supabase = getCookies();
  const { data: { session }, error } = await supabase.auth.getSession();

  if (error) {
    redirect('/auth/login', RedirectType.push);
  }

  const { data } = await supabase
      .from('users_has_roles')
      .select()
      .eq('user_id', session?.user.id);

  return data ? await getUserRole(data) : 'operator';
};

const getUsersBasicInformation = async({ queryParams }: any) => {
  const role = await getCurrentUser();
  const supabase = role === 'admin' ? getPrivateCookies() : getCookies();

  const { data, error } = await supabase.auth.admin.listUsers({
    page: queryParams.pagination.page,
    perPage: queryParams.pagination.perPage
  });

  if (error) {
    if (error.status === 403) {
      throw new Error('You don\'t have the required permissions to do this request');
    }
    throw new Error(`Error at getting the users: ${error.message}`);
  }

  if (!data || !data.users) {
    redirect('/auth/login', RedirectType.push);
  }

  return {
    data: data.users,
    pagination: {
      currentPage: Number(queryParams.pagination.page),
      totalPages: data.lastPage,
      totalCount: data.total
    }
  };
};

export const getUsers = async({ queryParams }: any) => {
  const supabase = getPrivateCookies();
  const users = await getUsersBasicInformation({ queryParams });

  const usersCompletePromises = users.data.map(async(user) => {
    const { data, error } = await supabase.from('profiles').select().eq('id', user?.id);

    if (error) {
      throw new Error(`Error at getting the user with ID ${user.id}: ${error.message}`);
    }

    return {
      id: user.id,
      image_id: data[0]?.image_id ?? null,
      phone: user.phone ?? null,
      email: user.email ?? null,
      last_name: data[0]?.last_name ?? null,
      first_name: data[0]?.first_name ?? null
    };
  });

  const usersComplete = await Promise.all(usersCompletePromises);

  return { data: usersComplete, pagination: users.pagination };
};

export const deleteUser = async(id: string) => {
  const role = await getCurrentUser();
  const supabase = role === 'admin' ? getPrivateCookies() : getCookies();
  const { error } = await supabase.auth.admin.deleteUser(id);

  if (error) {
    throw new Error(`Error at deleting the user: ${error.message}`);
  }
};
