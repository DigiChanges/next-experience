import React from 'react';
import { List } from '@/features/items/organisms/List';
import {  getItems } from '@/features/items/actions/ItemAction';

type Props = {
  queryParams: {
    filter: URLSearchParams
  }

};
export const ItemsTemplate: (props: Props) => Promise<React.JSX.Element>  = async({ queryParams }: Props) =>  {
  const { data, pagination } = await getItems({ queryParams });
  return (
    <List
      items={data}
      pagination={pagination}
    />
  );
};
