'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputForm } from '@/features/shared/atoms/inputForm/InputForm';
import Image from 'next/image';
import { icons } from '@/features/shared/hooks/icons';
import { Item, ItemPayload } from '@/features/items/interfaces/itemsResponse';
import style from './createItem.module.css';
import { modalSchema } from '@/features/items/validations/modalSchema';
import { createItem } from '@/features/items/actions/ItemAction';

export const CreateItemTemplate: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Item>({
    resolver: yupResolver(modalSchema)
  });
  const createAction = async(data: ItemPayload) => {
    await  createItem({ data });
  };

  const { IconInformation } = icons();

  return (
    <div className={style.container}>
      <div className={style.subTitle}>
        <Image src={IconInformation.src} width={50} height={50} alt='icon information'/>
        <h2>Add Item information</h2>
      </div>

      <form className={style.form} onSubmit={handleSubmit(async(data) => { await createAction(data); })}>
        <div>
          <InputForm
            type={'text'}
            name={'name'}
            register={register}
            errors={errors}
            id={'name'}
            className={style.inputBlock}
          />

          <InputForm
            type={'number'}
            name={'type'}
            register={register}
            errors={errors}
            id={'type'}
            className={style.inputBlock}
          />
        </div>
        <div className={style.containerBtn}>
          <div className={style.btnAdd}>
            <button type="submit" className={style.addItem}>Add item</button>
          </div>
          <div className={style.btnClose}>
            <button type="button" className={style.close}>
                            Cancel
            </button>
          </div>
        </div>
      </form>

    </div>

  );
};
