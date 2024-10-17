/* eslint-disable */
'use client';
import React, { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { createItem } from '@/features/items/actions/ItemAction';

import { InputForm, InputType } from '@/features/shared/atoms/inputForm/InputForm';
import { BtnFormCreateUpdate } from '@/features/shared/molecules/btnFormCreateUpdate/BtnFormCreateUpdate';

import { activeOptions, rolesOptions } from '@/features/users/constants/selectOptionsData';
import { ICreateUser } from '@/features/users/interfaces/ICreateUser';
import { User, UserPayload } from '@/features/users/interfaces/usersResponse';
import { createUserSchema } from '@/features/users/validations/usersSchema';

import style from './formCreateUser.module.css';

export const FormCreate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateUser>({
    resolver: yupResolver(createUserSchema),
  });
  const t = useTranslations('UserList');
  const s = useTranslations('Shared');
  const alert = useTranslations('ToastCreate');

  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  // TODO: falta reemplazar el createItem
  const createAction = async (data: UserPayload) => {
    // await toast.promise(createItem({ data }), {
    //   error: alert('error'),
    //   success: alert('success'),
    //   pending: alert('pending'),
    // });
    setIsDisabled(false);
  };

  const onSubmit = async (data: UserPayload) => {
    await createAction(data);
  };

  return (
    <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <InputForm<ICreateUser>
          type={'text'}
          name={'role'}
          label={t('role')}
          register={register}
          errors={errors}
          id={'role'}
          className={style.inputBlock}
          input_type={InputType.SELECT}
          classNameError={style.inputError}
          disabled={isDisabled}
          options={rolesOptions}
        />
        <InputForm<ICreateUser>
          type={'text'}
          name={'active'}
          label={t('active')}
          register={register}
          errors={errors}
          id={'active'}
          className={style.inputBlock}
          input_type={InputType.SELECT}
          classNameError={style.inputError}
          disabled={isDisabled}
          options={activeOptions}
        />
        <InputForm<ICreateUser>
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
        <InputForm<ICreateUser>
          type={'text'}
          name={'lastName'}
          label={t('lastName')}
          register={register}
          errors={errors}
          id={'lastName'}
          className={style.inputBlock}
          input_type={InputType.SIMPLE}
          classNameError={style.inputError}
          disabled={isDisabled}
        />
        <InputForm<ICreateUser>
          type={'number'}
          name={'phone'}
          label={t('phone')}
          register={register}
          errors={errors}
          id={'phone'}
          className={style.inputBlock}
          input_type={InputType.SIMPLE}
          classNameError={style.inputError}
          disabled={isDisabled}
        />
        <InputForm<ICreateUser>
          type={'email'}
          name={'email'}
          label={t('email')}
          register={register}
          errors={errors}
          id={'email'}
          className={style.inputBlock}
          input_type={InputType.SIMPLE}
          classNameError={style.inputError}
        />
        <InputForm<ICreateUser>
          errors={errors}
          id={'password'}
          name={'password'}
          register={register}
          type={'password'}
          label={t('password')}
          className={style.inputBlock}
          input_type={InputType.SIMPLE}
          classNameError={style.inputError}
          placeholder={t('password')}
        />
      </div>
      <BtnFormCreateUpdate
        linkCancel={t('linkUsers')}
        textCancel={s('cancel')}
        disabledButton={isDisabled}
        textSubmit={t('add')}
      />
    </form>
  );
};
