import React from 'react';

import { redirect } from 'next/navigation';

import { listUsers } from '@/features/shared/actions/userActions';
import { PaginatedResponse } from '@/features/shared/helpers/supabase/fetchPaginatedData';
import { UserHasRole } from '@/features/shared/interfaces/UserHasRole';
import { UserList } from '@/features/users/organisms/UsersList';
import { QueryParams } from '@/service/IHttpParams';

type Props = {
  queryParams: QueryParams;
};

export const UsersTemplate = async ({ queryParams }: Props) => {
  const result = await listUsers({ queryParams });

  if (result instanceof Response) {
    await result.json();
    if (result.status === 401) {
      redirect('/unauthorized');
    }
  }

  const paginatedResponse = result as PaginatedResponse<UserHasRole>;
  const { data, pagination } = paginatedResponse;

  return <UserList users={data} pagination={pagination} />;
};
