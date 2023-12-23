import React from 'react';
import { LoginTemplate } from '@/features/auth/login/template/LoginTemplate';
import { PublicLayout } from '@/layout/public-layout/PublicLayout';
import { unstable_setRequestLocale } from 'next-intl/server';
import {getTranslations} from "next-intl/server";
import { useTranslations } from 'next-intl';

type Props = {
    readonly params: {locale: string};
};

export default function Page({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

    // const t = useTranslations('PathnamesPage');
    const t = await getTranslations({locale, namespace: 'LocaleLayout'});

  return (
    <PublicLayout>
      <div className="max-w-[490px]">
        <p>{t.raw('title')}</p>
      </div>
      <LoginTemplate/>
    </PublicLayout>
  );
}
