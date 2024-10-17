'use client';
import React from 'react';
import { useTranslations } from 'next-intl';

import { icons } from '@/features/shared/hooks/icons';
import { FormCreate } from '@/features/users/organisms/formCreate/FormCreateUser';

import style from './createUserTemplate.module.css';

export const CreateUserTemplate = () => {
  const { IoCreateOutline } = icons();
  const t = useTranslations('Add');

  return (
    <div className={style.container}>
      <div className={style.subContainer}>
        <div className={style.subTitle}>
          <IoCreateOutline />
          <h2>{t('titleUser')}</h2>
        </div>
        <FormCreate />
      </div>
    </div>
  );
};
