'use client';
import React, { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { createItem } from '@/features/items/actions/ItemAction';
import { Item, ItemPayload } from '@/features/items/interfaces/itemsResponse';
import { modalSchema } from '@/features/items/validations/modalSchema';
import { InputForm, InputType } from '@/features/shared/atoms/inputForm/InputForm';
import { BtnFormCreateUpdate } from '@/features/shared/molecules/btnFormCreateUpdate/BtnFormCreateUpdate';

import style from './form-create.module.css';

export const FormCreate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Item>({
    resolver: yupResolver(modalSchema),
  });
  const t = useTranslations('Items');
  const s = useTranslations('Shared');
  const alert = useTranslations('ToastCreate');

  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const createAction = async (data: ItemPayload, name: string) => {
    if (!name || name === 'submitForm') {
      await toast.promise(createItem({ data }), {
        error: alert('error'),
        success: alert('success'),
        pending: alert('pending'),
      });
      setIsDisabled(false);
    }
  };

  const onSubmit = async (data: ItemPayload) => {
    await createAction(data, 'submitForm');
  };

  return (
    <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
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
          classNameError={style.inputError}
          disabled={isDisabled}
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
          classNameError={style.inputError}
          disabled={isDisabled}
        />
      </div>
      <BtnFormCreateUpdate
        linkCancel={t('linkItems')}
        textCancel={s('cancel')}
        disabledButton={isDisabled}
        textSubmit={t('add')}
      />
    </form>
  );
};
