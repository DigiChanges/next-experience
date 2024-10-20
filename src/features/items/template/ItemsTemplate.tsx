import React from 'react';

import { getItems } from '@/features/items/actions/ItemAction';
import { List } from '@/features/items/organisms/List';
import { QueryParams } from '@/service/IHttpParams';

type Props = {
  queryParams: QueryParams;
};
export const ItemsTemplate: (props: Props) => Promise<React.JSX.Element> = async ({ queryParams }: Props) => {
  const { data, pagination } = await getItems({ queryParams });

  return <List items={data} pagination={pagination} />;
};
