'use client';
import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { updateItem } from '@/features/items/actions/ItemAction';
import { Item, ItemPayload } from '@/features/items/interfaces/itemsResponse';
import { modalSchema } from '@/features/items/validations/modalSchema';
import { InputForm, InputType } from '@/features/shared/atoms/inputForm/InputForm';

import style from './form-update.module.css';

type Props = {
  id: string;
  data: { name: string; description: number };
};
export const FormUpdate = ({ id, data }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Item>({
    defaultValues: {
      name: data.name,
      description: data.description,
    },
    resolver: yupResolver(modalSchema),
  });
  const alert = useTranslations('ToastUpdate');
  const t = useTranslations('Items');
  const s = useTranslations('Shared');

  const updateAction = async (data: ItemPayload) => {
    await toast.promise(updateItem({ id, data }), {
      error: `${alert('error')}`,
      success: `${alert('success')}`,
      pending: `${alert('pending')}`,
    });
  };
  return (
    <form
      className={style.form}
      onSubmit={handleSubmit(async (data) => {
        await updateAction(data);
      })}
    >
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
          name={'description'}
          label={t('description')}
          register={register}
          errors={errors}
          id={'description'}
          className={style.inputBlock}
          input_type={InputType.SIMPLE}
        />
      </div>
      <div className={style.containerBtn}>
        <div className={style.btnClose}>
          <Link href={'/items'}>
            <button type='button' className={style.close}>
              {s('cancel')}
            </button>
          </Link>
        </div>
        <div className={style.btnAdd}>
          <button type='submit' className={style.addItem}>
            {t('update')}
          </button>
        </div>
      </div>
    </form>
  );
};
