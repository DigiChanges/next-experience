import React, { Suspense } from 'react';

import { unstable_setRequestLocale } from 'next-intl/server';

import { LoaderStarsWars } from '@/features/shared/atoms/loader/LoaderStarsWars';
import { UsersTemplate } from '@/features/users/template/UsersTemplate';
import { PrivateLayout } from '@/layout/private-layout/PrivateLayout';
import { QueryParams } from '@/service/IHttpParams';

type Props = {
  readonly searchParams: { readonly [key: string]: string };
  readonly params: { locale: string };
};
export const revalidate = 0;
export default async function Page({ searchParams, params: { locale } }: Props) {
  const params = new URLSearchParams(searchParams);

  const queryParams: QueryParams = {
    filter: params,
  };
  unstable_setRequestLocale(locale);

  return (
    <PrivateLayout>
      <Suspense fallback={<LoaderStarsWars />}>
        <UsersTemplate queryParams={queryParams} />
      </Suspense>
    </PrivateLayout>
  );
}
