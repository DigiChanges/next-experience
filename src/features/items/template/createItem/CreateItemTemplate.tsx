'use client';
import React from 'react';
import Image from 'next/image';
import { icons } from '@/features/shared/hooks/icons';
import style from './createItem.module.css';
import { FormCreate } from '@/features/items/organisms/formCreate/FormCreate';
import {useTranslations} from "next-intl";


export const CreateItemTemplate: React.FC = () => {
  const { IconInformation } = icons();
  const t = useTranslations('Add');

  return (
    <div className={style.container}>
      <div className={style.subContainer}>
        <div className={style.subTitle}>
          <Image src={IconInformation.src} width={50} height={50} alt='icon information'/>
          <h2>{t('title')}</h2>
        </div>
        <FormCreate/>
      </div>
    </div>
  );
};
