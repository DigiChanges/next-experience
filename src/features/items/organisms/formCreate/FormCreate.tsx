'use client';
import React from 'react';
import style from './formCreate.module.css';
import { InputForm } from '@/features/shared/atoms/inputForm/InputForm';
import { useForm } from 'react-hook-form';
import { Item, ItemPayload } from '@/features/items/interfaces/itemsResponse';
import { yupResolver } from '@hookform/resolvers/yup';
import { modalSchema } from '@/features/items/validations/modalSchema';
import Link from 'next/link';

interface IForm{

    action: (data: ItemPayload, id?: string) => Promise<void>;

}
export const FormCreate: React.FC<IForm> = ({  action }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<Item>({
    resolver: yupResolver(modalSchema)
  });
  return (
    <form onSubmit={handleSubmit(async(data) => { await action(data); })}>
      <div>
        <InputForm<Item>
          type={'text'}
          name={'name'}
          register={register}
          errors={errors}
          id={'name'}
          className={style.inputBlock}
        />

        <InputForm<Item>
          type={'number'}
          name={'type'}
          register={register}
          errors={errors}
          id={'type'}
          className={style.inputBlock}
        />
      </div>
      <span className={style.line}></span>
      <div className={style.containerBtn}>
        <div className={style.btnAdd}>
          <button type="submit" className={style.addItem}>Add item</button>
        </div>
        <div className={style.btnClose}>
          <Link href={'/items'}>
            <button type="button" className={style.close}>
                        Cancel
            </button>
          </Link>
        </div>
      </div>
    </form>
  );
};
