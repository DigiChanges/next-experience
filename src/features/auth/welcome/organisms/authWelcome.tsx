import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { icons } from '@/features/shared/hooks/icons';

import style from './auth-welcome.module.css';

export const AuthWelcome = () => {
  const t = useTranslations('AuthWelcome');
  const { authWelcome } = icons();

  return (
    <div className={style.container}>
      <Image src={authWelcome} alt={'authWelcome'} />
      <h2>{t('title')}</h2>
      <p>{t('description')}</p>
      <Link href={'/auth/login'}>{t('button')}</Link>
    </div>
  );
};
