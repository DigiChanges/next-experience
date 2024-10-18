import React, { Suspense } from 'react';
import { unstable_setRequestLocale } from 'next-intl/server';

import { paginationInitialParams } from '@/features/items/constants/paginationInitialParams';
import { ItemsTemplate } from '@/features/items/template/ItemsTemplate';
import { LoaderStarsWars } from '@/features/shared/atoms/loader/LoaderStarsWars';
import { PrivateLayout } from '@/layout/private-layout/PrivateLayout';
import { QueryParams } from '@/service/IHttpParams';

type Props = {
  readonly searchParams: { readonly [key: string]: string };
  readonly params: { locale: string };
};
export const revalidate = 0;
export default async function Page({ searchParams, params: { locale } }: Props) {
  const params = new URLSearchParams(searchParams);
  unstable_setRequestLocale(locale);

  const queryParams: QueryParams = {
    pagination: {
      offset: params.get('pagination[offset]') ?? paginationInitialParams.offset,
      limit: params.get('pagination[limit]') ?? paginationInitialParams.limit,
    },
    filter: params,
  };

  return (
    <PrivateLayout>
      <Suspense fallback={<LoaderStarsWars />}>
        <ItemsTemplate queryParams={queryParams} />
      </Suspense>
    </PrivateLayout>
  );
}
