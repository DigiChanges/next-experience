import React, { Suspense } from 'react';
import { unstable_setRequestLocale } from 'next-intl/server';

import { LoaderStarsWars } from '@/features/shared/atoms/loader/LoaderStarsWars';
import { UpdateUserTemplate } from '@/features/users/template/updateUser/UpdateUserTemplate';
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
        <UpdateUserTemplate id={id} />
      </Suspense>
    </PrivateLayout>
  );
}
