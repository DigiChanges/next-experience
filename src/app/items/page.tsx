import React, { Suspense } from 'react';
import { ItemsTemplate } from '@/features/items/template/ItemsTemplate';
import { LoaderStarsWars } from '@/features/shared/atoms/loader/LoaderStarsWars';
import { PrivateLayout } from '@/layout/private-layout/PrivateLayout';
import { QueryParams } from '@/service/IHttpParams';
import { paginationInitialParams } from '@/features/items/constants/paginationInitialParams';

type Props = {
    searchParams: { readonly [key: string]: string };
};


export const revalidate = 0;

export default async function Page(props: Readonly<Props>) {
  const params = new URLSearchParams(props.searchParams);

  const queryParams: QueryParams = {
    pagination: {
      offset: params.get('pagination[offset]') ?? paginationInitialParams.offset,
      limit: params.get('pagination[limit]') ?? paginationInitialParams.limit
    },
    filter: params
  };

  return (
    <PrivateLayout>
      <Suspense fallback={<LoaderStarsWars/>}>
        <ItemsTemplate queryParams={queryParams}/>
      </Suspense>
    </PrivateLayout>
  );
}


