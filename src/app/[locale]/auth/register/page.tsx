import React from 'react';
import { RegisterTemplate } from '@/features/auth/register/template/RegisterTempalte';
import { PublicLayout } from '@/layout/public-layout/PublicLayout';
import { unstable_setRequestLocale } from 'next-intl/server';

type Props = {
    readonly   params: {locale: string};
};

export default function Page({ params: { locale } }: Props){
  unstable_setRequestLocale(locale);

  return (
    <PublicLayout>
      <RegisterTemplate/>
    </PublicLayout>
  );
}
