import React from 'react';
import { List } from '@/features/items/organisms/List';
import {  getItems } from '@/features/items/actions/ItemAction';

export const ItemsTemplate: () => Promise<React.JSX.Element>  = async() =>  {
  const { data } = await getItems();

  return (
    <List
      items={data}
    />

  );
};
