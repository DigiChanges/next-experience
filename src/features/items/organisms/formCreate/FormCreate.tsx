'use client';
import React, { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { createItem } from '@/features/items/actions/ItemAction';
import { Item, ItemPayload } from '@/features/items/interfaces/itemsResponse';
import { modalSchema } from '@/features/items/validations/modalSchema';
// import { handleUploadFile } from '@/features/shared/actions/fileAction';
import { BtnFormCreateUpdate } from '@/features/shared/atoms/btnFormCreateUpdate/BtnFormCreateUpdate';
import { InputForm, InputType } from '@/features/shared/atoms/inputForm/InputForm';

import style from './form-create.module.css';
// import error from '@/app/error';

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

  // const handleChange = async(event: ChangeEvent<HTMLInputElement>, name: string) => {
  //   try {
  //     if (name === 'uploadFile') {
  //       event.preventDefault();
  //       setIsDisabled(true);
  //       if (event.target.files && event.target.files[0]) {
  //         const formData = new FormData();
  //         formData.append('file', event.target.files[0]);
  //         const id = await handleUploadFile(formData);
  //         if (id) {
  //           setValue('file', id);
  //         }
  //       }
  //       setIsDisabled(false);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     setIsDisabled(false);
  //   }
  // };

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

        {/* <InputForm<Item>*/}
        {/*  type={'file'}*/}
        {/*  name={'file'}*/}
        {/*  label={t('file')}*/}
        {/*  register={register}*/}
        {/*  errors={errors}*/}
        {/*  id={'file'}*/}
        {/*  className={style.input}*/}
        {/*  input_type={InputType.FILE}*/}
        {/*  classNameError={style.inputError}*/}
        {/*  onChange={(e) => handleChange(e, 'uploadFile')}*/}
        {/*  multiple={false}*/}
        {/*  disabled={isDisabled}*/}
        {/* />*/}
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
