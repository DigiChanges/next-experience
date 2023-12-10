'use client';
import React from 'react';
import Image from 'next/image';
import { icons } from '@/features/shared/hooks/icons';
import style from './createItem.module.css';
import { FormCreate } from '@/features/items/organisms/formCreate/FormCreate';


export const CreateItemTemplate: React.FC = () => {
  const { IconInformation } = icons();

  return (
    <div className={style.container}>
      <div className={style.subContainer}>
        <div className={style.subTitle}>
          <Image src={IconInformation.src} width={50} height={50} alt='icon information'/>
          <h2>Add Item information</h2>
        </div>
        <FormCreate/>

      </div>
    </div>
  );
};
