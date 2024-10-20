import React from 'react';

import { SupabasePagination } from '@/features/shared/actions/supabase/getPaginatedEntity';
import { listUsers } from '@/features/shared/actions/userActions';
import { UserHasRole } from '@/features/shared/interfaces/UserHasRole';
import { UserList } from '@/features/users/organisms/UsersList';
import { QueryParams } from '@/service/IHttpParams';

type Props = {
  queryParams: QueryParams;
};

export const UsersTemplate = async ({ queryParams }: Props) => {
  const result = await listUsers({ queryParams });

  const paginatedResponse = result as SupabasePagination<UserHasRole>;
  const { data, pagination } = paginatedResponse;

  return <UserList users={data} pagination={pagination} />;
};
