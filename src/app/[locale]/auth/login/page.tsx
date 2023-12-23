import React from 'react';
import { LoginTemplate } from '@/features/auth/login/template/LoginTemplate';
import { PublicLayout } from '@/layout/public-layout/PublicLayout';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

type Props = {
    params: {locale: string};
};

export default function Page({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('PathnamesPage');

  return (
    <PublicLayout>
      <div className="max-w-[490px]">
        <p>{t.raw('title')}</p>
      </div>
      <LoginTemplate/>
    </PublicLayout>
  );
}
