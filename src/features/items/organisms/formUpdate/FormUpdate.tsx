'use client';
import React from 'react';
import style from './form-update.module.css';
import { InputForm, InputType } from '@/features/shared/atoms/inputForm/InputForm';
import {  useForm } from 'react-hook-form';
import { Item, ItemPayload } from '@/features/items/interfaces/itemsResponse';
import { yupResolver } from '@hookform/resolvers/yup';
import { modalSchema } from '@/features/items/validations/modalSchema';
import Link from 'next/link';
import { updateItem } from '@/features/items/actions/ItemAction';
import { toast } from 'react-toastify';
import { useTranslations } from 'next-intl';


type Props = {
    id: string;
    data:{ name: string, type: number}
}
export const FormUpdate = ({ id, data }: Props) => {
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
    <form className={style.form} onSubmit={handleSubmit(async(data) => { await updateAction(data); })}>
      <div>
        <InputForm<Item>
          type={'text'}
          name={'name'}
          label={t('name')}
          register={register}
          errors={errors}
          id={'name'}
          className={style.inputBlock}
          input_type={InputType.SIMPLE}
        />

        <InputForm<Item>
          type={'number'}
          name={'type'}
          label={t('type')}
          register={register}
          errors={errors}
          id={'type'}
          className={style.inputBlock}
          input_type={InputType.SIMPLE}
        />
      </div>
      <div className={style.containerBtn}>
        <div className={style.btnClose}>
          <Link href={'/items'}>
            <button type="button" className={style.close}>
              {s('cancel')}
            </button>
          </Link>
        </div>
        <div className={style.btnAdd}>
          <button type="submit" className={style.addItem}>{t('update')}</button>
        </div>
      </div>
    </form>
  );
};
