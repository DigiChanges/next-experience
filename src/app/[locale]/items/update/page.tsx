import React, { Suspense } from 'react';
import { unstable_setRequestLocale } from 'next-intl/server';

import { UpdateItemTemplate } from '@/features/items/template/update/UpdateItemTemplate';
import { LoaderStarsWars } from '@/features/shared/atoms/loader/LoaderStarsWars';
import { PrivateLayout } from '@/layout/private-layout/PrivateLayout';

type Props = {
  readonly searchParams: { readonly [key: string]: string };
  readonly params: { locale: string };
};
export default function Page({ searchParams, params: { locale } }: Props) {
  const { id } = searchParams;
  unstable_setRequestLocale(locale);
  return (
    <PrivateLayout>
      <Suspense fallback={<LoaderStarsWars />}>
        <UpdateItemTemplate id={id} />
      </Suspense>
    </PrivateLayout>
  );
}
