import React from 'react';

import { unstable_setRequestLocale } from 'next-intl/server';

import { ExpiredLinkTemplate } from '@/features/auth/expired-link/template/ExpiredLinkTemplate';
import { PublicLayout } from '@/layout/public-layout/PublicLayout';

type Props = {
  readonly params: { locale: string };
};

export default function Page({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  return (
    <PublicLayout>
      <ExpiredLinkTemplate />
    </PublicLayout>
  );
}
