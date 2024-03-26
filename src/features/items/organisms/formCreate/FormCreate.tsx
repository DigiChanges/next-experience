'use client';
import React from 'react';
import style from './formCreate.module.css';
import { InputForm } from '@/features/shared/atoms/inputForm/InputForm';
import { useForm } from 'react-hook-form';
import { Item, ItemPayload } from '@/features/items/interfaces/itemsResponse';
import { yupResolver } from '@hookform/resolvers/yup';
import { modalSchema } from '@/features/items/validations/modalSchema';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { createItem } from '@/features/items/actions/ItemAction';
import { useTranslations } from 'next-intl';

export const FormCreate: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Item>({
    resolver: yupResolver(modalSchema)
  });
  const t = useTranslations('Items');
  const s = useTranslations('Shared');
  const alert = useTranslations('ToastCreate');

  const createAction = async(data: ItemPayload) => {
    await  toast.promise(createItem({ data }), {
      error: `${alert('error')}`,
      success: `${alert('success')}`,
      pending:`${alert('pending')}`
    });
  };


  return (
    <form className={style.form} onSubmit={handleSubmit(async(data) => { await createAction(data); })}>
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
        <div className={style.btnClose}>
          <Link href={'/items'}>
            <button type="button" className={style.close}>
              {s('cancel')}
            </button>
          </Link>
        </div>
        <div className={style.btnAdd}>
          <button type="submit" className={style.addItem}>{t('add')}</button>
        </div>
      </div>
    </form>
  );
};
