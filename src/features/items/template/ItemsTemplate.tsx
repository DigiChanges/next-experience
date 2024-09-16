import React from 'react';
import { List } from '@/features/items/organisms/List';
// import { getItems } from '@/features/items/actions/ItemAction';
import { QueryParams } from '@/service/IHttpParams';

type Props = {
    queryParams: QueryParams
};
export const ItemsTemplate: (props: Props) => Promise<React.JSX.Element> = async(
  // { queryParams }: Props
) => {
  // const { data, pagination } = await getItems({ queryParams });

  const data = [{
    id: 'f4c5ff8d-73d3-4ed6-bec1-9866b579bb90',
    name: 'Item 1',
    type: 5,
    createdAt: 1663779723,
    updatedAt: 1663779723
  }, {
    id: 'f4c5ff8d-73d3-4ed6-bec1-9866b579bb91',
    name: 'Item 2',
    type: 10,
    createdAt: 1663779723,
    updatedAt: 1663779723
  }, {
    id: 'f4c5ff8d-73d3-4ed6-bec1-9866b579bb92',
    name: 'Item 3',
    type: 12,
    createdAt: 1663779723,
    updatedAt: 1663779723
  }, {
    id: 'f4c5ff8d-73d3-4ed6-bec1-9866b579bb93',
    name: 'Item 4',
    type: 10,
    createdAt: 1663779723,
    updatedAt: 1663779723
  }, {
    id: 'f4c5ff8d-73d3-4ed6-bec1-9866b579bb94',
    name: 'Item 5',
    type: 12,
    createdAt: 1663779723,
    updatedAt: 1663779723
  }, {
    id: 'f4c5ff8d-73d3-4ed6-bec1-9866b579bb95',
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
