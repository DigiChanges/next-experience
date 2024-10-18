import React from 'react';

import { fetchUsers } from '@/features/shared/actions/fetchUsers';
import { UserList } from '@/features/users/organisms/UsersList';
import { QueryParams } from '@/service/IHttpParams';

type Props = {
  queryParams: QueryParams;
};

export const UsersTemplate = async ({ queryParams }: Props) => {
  const result = await fetchUsers({ queryParams });
  const data = result.data ?? [];
  const pagination = result.pagination ?? {
    total: 0,
    offset: 0,
    limit: 0,
    perPage: 0,
    currentPage: 1,
    lastPage: 1,
    from: 0,
    to: 0,
    path: '',
    firstUrl: '',
    lastUrl: '',
    nextUrl: '',
    prevUrl: '',
    currentUrl: '',
  };

  return <UserList users={data} pagination={pagination} />;
};
