import React from 'react';
import { UserList } from '@/features/users/organisms/Users';
import { UsersQueryParams } from '@/service/IHttpParams';
import { getUsers } from '@/features/users/actions/usersAction';

type Props = {
  queryParams: UsersQueryParams
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
