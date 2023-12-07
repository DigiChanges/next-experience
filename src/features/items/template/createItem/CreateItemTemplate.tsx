'use client';
import React from 'react';
import Image from 'next/image';
import { icons } from '@/features/shared/hooks/icons';
import { ItemPayload } from '@/features/items/interfaces/itemsResponse';
import style from './createItem.module.css';
import { createItem } from '@/features/items/actions/ItemAction';
import { FormCreate } from '@/features/items/organisms/formCreate/FormCreate';


export const CreateItemTemplate: React.FC = () => {
  const createAction = async(data: ItemPayload) => {
    await createItem({ data });
  };

  const { IconInformation } = icons();

  return (
    <div className={style.container}>
      <div className={style.subContainer}>
        <div className={style.subTitle}>
          <Image src={IconInformation.src} width={50} height={50} alt='icon information'/>
          <h2>Add Item information</h2>
        </div>
        <FormCreate action={createAction}/>

      </div>
    </div>
  );
};
