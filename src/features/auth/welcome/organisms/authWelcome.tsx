'use client';
import React from 'react';
import style from './authWelcome.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { icons } from '@/features/shared/hooks/icons';
import { useTranslations } from 'next-intl';

export const AuthWelcome: React.FC = () => {
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
