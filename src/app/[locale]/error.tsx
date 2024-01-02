'use client';
import React from 'react';
import style from './error.module.css';
import { useTranslations } from 'next-intl';

type Props = {
    reset: () => void;
}
export default function Error({ reset } : Props) {
  const t = useTranslations('Error');

  return (
    <div className={style.container}>
      <div className={style.containerTitle}>
        <h1 className={style.title}>{t('title')}</h1>
      </div>
      <div className={style.containerTry}>
        <h2>{t('description')}</h2>
        <button onClick={reset}>{t('retry')}</button>
      </div>

    </div>
  );
}
