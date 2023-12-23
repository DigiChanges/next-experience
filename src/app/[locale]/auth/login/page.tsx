import React from 'react';
import { LoginTemplate } from '@/features/auth/login/template/LoginTemplate';
import { PublicLayout } from '@/layout/public-layout/PublicLayout';
import {useTranslations} from 'next-intl';
import {getTranslations} from "next-intl/server";

type Props = {
    params: {locale: string};
};

export default async function Page({params: {locale}}: Props) {
    // const t = useTranslations('PathnamesPage');
    const t = await getTranslations({locale, namespace: 'LocaleLayout'});

  return (
      <PublicLayout>
          <div className="max-w-[490px]">
              <p>{t('title')}</p>
          </div>
          <LoginTemplate/>
      </PublicLayout>
  );
}
