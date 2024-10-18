import React from 'react';

import { unstable_setRequestLocale } from 'next-intl/server';

import { AuthWelcomeTemplate } from '@/features/auth/welcome/template/AuthWelcomeTemplate';
import { PublicLayout } from '@/layout/public-layout/PublicLayout';

type Props = {
  readonly params: { locale: string };
};

export default function Page({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  return (
    <PublicLayout>
      <AuthWelcomeTemplate />
    </PublicLayout>
  );
}
