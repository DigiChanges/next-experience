import style from './title.module.css';
import React from 'react';
import {useTranslations} from "next-intl";

const t = useTranslations('items')
export const Title = () => {
  return (
    <div className={style.title}>
      <h1>{t('title')}</h1>
      <span/>
    </div>
  );
};
