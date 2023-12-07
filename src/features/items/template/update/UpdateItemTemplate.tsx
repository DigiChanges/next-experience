
import React from 'react';
import style from './updateItem.module.css';
import Image from 'next/image';
import { ItemPayload } from '@/features/items/interfaces/itemsResponse';
import {  getOne, updateItem } from '@/features/items/actions/ItemAction';
import { icons } from '@/features/shared/hooks/icons';
import { FormUpdate } from '@/features/items/organisms/formUpdate/FormUpdate';

interface IProps{
    id: string;
}
export const UpdateItemTemplate = async({ id }: IProps) => {
  const { data } = await getOne({ id });
  const updateAction = async(data: ItemPayload) => {
    'use server';
    await updateItem({ id, data });
  };
  const { IconInformation } = icons();
  return (
    <div className={style.container}>
      <div className={style.subContainer}>
        <div className={style.subTitle}>
          <Image src={IconInformation.src} width={50} height={50} alt='icon information'/>
          <h2>Edit Item information</h2>
        </div>
        <FormUpdate action={updateAction} data={data}/>
      </div>
    </div>
  );
};
