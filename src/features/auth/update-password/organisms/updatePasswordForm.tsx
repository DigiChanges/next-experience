'use client';
import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { redirect, RedirectType } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { handleUpdatePassword } from '@/features/auth/update-password/actions/updatePasswordAction';
import { IupdatePasswordForm } from '@/features/auth/update-password/interfaces/IupdatePassaword';
import { updateSchema } from '@/features/auth/update-password/validations/updatePasswordSchema';
import { InputForm, InputType } from '@/features/shared/atoms/inputForm/InputForm';

import style from './update-password.module.css';

export const UpdatePasswordForm = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IupdatePasswordForm>({
    resolver: yupResolver(updateSchema),
  });
  const searchParams = useSearchParams();
  const code = searchParams.get('code');
  const t = useTranslations('UpdatePss');
  const alerts = useTranslations('ToastUpdatePass');

  const onSubmit = handleSubmit(async ({ password }: IupdatePasswordForm) => {
    if (code) {
      await toast.promise(handleUpdatePassword(password, code), {
        error: `${alerts('error')}`,
        success: `${alerts('success')}`,
        pending: `${alerts('pending')}`,
      });
    }
    reset();
  });
  if (!code) {
    redirect('/auth/invalid-link', RedirectType.push);
  }
  return (
    <div className={style.container}>
      <h1>{t('title')}</h1>
      <h2>{t('description')}</h2>
      <form className={style.form} onSubmit={(data) => onSubmit(data)}>
        <div>
          <InputForm<IupdatePasswordForm>
            errors={errors}
            id={'password'}
            name={'password'}
            register={register}
            type={'password'}
            label={t('password')}
            className={style.input}
            input_type={InputType.SIMPLE}
            placeholder={t('password')}
            classNameError={style.inputError}
          />
          <InputForm<IupdatePasswordForm>
            errors={errors}
            id={'confirmPassword'}
            name={'confirmPassword'}
            register={register}
            type={'password'}
            label={t('repeatPassword')}
            input_type={InputType.SIMPLE}
            className={style.input}
            placeholder={t('repeatPassword')}
            classNameError={style.inputError}
          />
        </div>
        <button type='submit' className={'text-white'}>
          <span>{t('send')}</span>
        </button>
      </form>
    </div>
  );
};
