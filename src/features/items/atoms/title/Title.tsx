import React from 'react';
import { useTranslations } from 'next-intl';

import style from './title.module.css';

interface Props {
  section: string;
}

export const Title = ({ section }: Props) => {
  const t = useTranslations(section);
  return (
    <div className={style.title}>
      <h1>{t('title')}</h1>
      <span />
    </div>
  );
};
