import React from 'react';

import { getUsers } from '@/features/users/actions/usersAction';
import { UserList } from '@/features/users/organisms/UsersList';
import { QueryParams } from '@/service/IHttpParams';

type Props = {
  queryParams: QueryParams;
};

export const UsersTemplate: (props: Props) => Promise<React.JSX.Element> = async ({ queryParams }: Props) => {
  const { data, pagination } = await getUsers({ queryParams });

  return <UserList users={data} pagination={pagination} />;
};
