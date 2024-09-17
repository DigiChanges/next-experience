'use client';
import React from 'react';
import { icons } from '@/features/shared/hooks/icons';
import style from './createItem.module.css';
import { FormCreate } from '@/features/items/organisms/formCreate/FormCreate';
import { useTranslations } from 'next-intl';

export const CreateItemTemplate = () => {
  const { IoCreateOutline } = icons();
  const t = useTranslations('Add');

  return (
    <div className={style.container}>
      <div className={style.subContainer}>
        <div className={style.subTitle}>
          <IoCreateOutline />
          <h2>{t('title')}</h2>
        </div>
        <FormCreate/>

      </div>
    </div>
  );
};
