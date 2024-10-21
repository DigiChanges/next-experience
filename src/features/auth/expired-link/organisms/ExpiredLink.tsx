import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { icons } from '@/features/shared/hooks/icons';

import style from './expired-link.module.css';

export const Expiredlink = () => {
  const t = useTranslations('ExpiredLink');
  const { expiredLink } = icons();

  return (
    <div className={style.container}>
      <Image src={expiredLink} alt={'expiredLink'} />
      <h2>{t('title')}</h2>
      <p>{t('description')}</p>
      <Link href={'/auth/login'}>{t('button')}</Link>
    </div>
  );
};
