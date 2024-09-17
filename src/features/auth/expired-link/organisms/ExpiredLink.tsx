import React from 'react';
import style from './ExpiredLink.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { icons } from '@/features/shared/hooks/icons';
import { useTranslations } from 'next-intl';

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
