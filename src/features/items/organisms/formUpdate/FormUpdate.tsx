'use client';
import React from 'react';
import style from './formUpdate.module.css';
import { InputForm } from '@/features/shared/atoms/inputForm/InputForm';
import {  useForm } from 'react-hook-form';
import { Item, ItemPayload } from '@/features/items/interfaces/itemsResponse';
import { yupResolver } from '@hookform/resolvers/yup';
import { modalSchema } from '@/features/items/validations/modalSchema';
import Link from 'next/link';
import { updateItem } from '@/features/items/actions/ItemAction';
import { toast } from 'react-toastify';
import { useTranslations } from 'next-intl';

interface Props{
    id: string;
    data:{ name: string, type: number}
}
export const FormUpdate: React.FC<Props> = ({ id, data }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<Item>({
    defaultValues:{
      name : data.name,
      type: data.type
    },
    resolver: yupResolver(modalSchema)
  });
  const alert = useTranslations('ToastUpdate');
  const t = useTranslations('Items');
  const s = useTranslations('Shared');

  const updateAction = async(data: ItemPayload) => {
    await  toast.promise(updateItem({ id, data }), {
      error: `${alert('error')}`,
      success: `${alert('success')}`,
      pending:`${alert('pending')}`
    });
  };
  return (
    <form  onSubmit={handleSubmit(async(data) => { await updateAction(data); })}>
      <div>
        <InputForm<Item>
          type={'text'}
          name={'name'}
          label={t('name')}
          register={register}
          errors={errors}
          id={'name'}
          className={style.inputBlock}
        />

        <InputForm<Item>
          type={'number'}
          name={'type'}
          label={t('type')}
          register={register}
          errors={errors}
          id={'type'}
          className={style.inputBlock}
        />
      </div>
      <div className={style.containerBtn}>
        <div className={style.btnAdd}>
          <button type="submit" className={style.addItem}>{t('update')}</button>
        </div>
        <div className={style.btnClose}>
          <Link href={'/items'}>
            <button type="button" className={style.close}>
              {s('cancel')}
            </button>
          </Link>
        </div>
      </div>
    </form>
  );
};
