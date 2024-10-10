import React from 'react';
import { useTranslations } from 'next-intl';

import style from './title.module.css';

export const Title = () => {
  const t = useTranslations('Items');
  return (
    <div className={style.title}>
      <h1>{t('title')}</h1>
      <span />
    </div>
  );
};
