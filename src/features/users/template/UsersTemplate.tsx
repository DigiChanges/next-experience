import React from 'react';
import { UserList } from '@/features/users/organisms/UsersList';
import { QueryParams } from '@/service/IHttpParams';
import { getUsers } from '@/features/users/actions/usersAction';

type Props = {
  queryParams: QueryParams
};

export const UsersTemplate: (props: Props) => Promise<React.JSX.Element> = async(
  { queryParams }: Props
) => {
  const { data, pagination } = await getUsers({ queryParams });

  return (
    <UserList
      users={data}
      pagination={pagination}
    />
  );
};
