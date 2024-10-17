import React from 'react';
import { unstable_setRequestLocale } from 'next-intl/server';

import { CreateUserTemplate } from '@/features/users/template/createUser/CreateUserTemplate';
import { PrivateLayout } from '@/layout/private-layout/PrivateLayout';

type Props = {
  readonly params: { locale: string };
};
export default function Page({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  return (
    <PrivateLayout>
      <CreateUserTemplate />
    </PrivateLayout>
  );
}
