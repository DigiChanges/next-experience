import React from 'react';
import { List } from '@/features/items/organisms/List';
import { getItems } from '@/features/items/actions/ItemAction';
import { QueryParams } from '@/service/IHttpParams';

type Props = {
    queryParams: QueryParams
};
export const ItemsTemplate: (props: Props) => Promise<React.JSX.Element> = async(
  { queryParams }: Props
) => {
  // const { data, pagination } = await getItems({ queryParams });
  const data = [{
    id: '1',
    name: 'Item 1',
    type: 5,
    createdAt: 1663779723,
    updatedAt: 1663779723
  }, {
    id: '2',
    name: 'Item 2',
    type: 10,
    createdAt: 1663779723,
    updatedAt: 1663779723
  }, {
    id: '3',
    name: 'Item 3',
    type: 12,
    createdAt: 1663779723,
    updatedAt: 1663779723
  }, {
    id: '4',
    name: 'Item 4',
    type: 10,
    createdAt: 1663779723,
    updatedAt: 1663779723
  }, {
    id: '5',
    name: 'Item 5',
    type: 12,
    createdAt: 1663779723,
    updatedAt: 1663779723
  }, {
    id: '6',
    name: 'Item 6',
    type: 10,
    createdAt: 1663779723,
    updatedAt: 1663779723
  }];
  const pagination = {
    total: 1,
    offset: 0,
    limit: 10,
    perPage: 1,
    currentPage: 1,
    lastPage: 1,
    from: 0,
    to: 1,
    path: 'http://localhost:8089/api',
    firstUrl: 'http://localhost:8089/api/items?pagination[limit]=10&pagination[offset]=0',
    lastUrl: 'http://localhost:8089/api/items?pagination[limit]=10&pagination[offset]=0',
    nextUrl: '',
    prevUrl: '',
    currentUrl: 'http://localhost:8089/api/items?pagination[limit]=10&pagination[offset]=0'
  };
  return (
    <List
      items={data}
      pagination={pagination}
    />
  );
};
