import React from 'react';
import style from './invalid-link.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { icons } from '@/features/shared/hooks/icons';
import { useTranslations } from 'next-intl';

export const InvalidLink = () => {
  const t = useTranslations('InvalidLink');
  const { expiredLink } = icons();

  return (
    <div className={style.container}>
      <Image src={expiredLink} alt={'invalidLink'} />
      <h2>{t('title')}</h2>
      <p>{t('description')}</p>
      <Link href={'/auth/forgot-password'}>
        <button>{t('button')}</button>
      </Link>
    </div>
  );
};
