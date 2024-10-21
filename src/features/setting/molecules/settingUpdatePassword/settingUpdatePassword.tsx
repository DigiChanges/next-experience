'use client';
import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { handleUpdatePassword } from '@/features/auth/update-password/actions/updatePasswordAction';
import { IsettingUpdatePassaword } from '@/features/setting/interfaces/IsettingUpdatePassaword';
import { settingUpdatePasswordSchema } from '@/features/setting/validations/settingUpdatePasswordSchema';
import { InputForm, InputType } from '@/features/shared/atoms/inputForm/InputForm';

import style from './setting-update-password.module.css';

export const SettingUpdatePassword = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IsettingUpdatePassaword>({
    resolver: yupResolver(settingUpdatePasswordSchema),
  });
  const searchParams = useSearchParams();
  const code = searchParams.get('code');
  const t = useTranslations('UpdatePss');
  const alerts = useTranslations('ToastUpdatePass');
  const onSubmit = handleSubmit(async ({ password }: IsettingUpdatePassaword) => {
    if (code) {
      await toast.promise(handleUpdatePassword(password, code), {
        error: `${alerts('error')}`,
        success: `${alerts('success')}`,
        pending: `${alerts('pending')}`,
      });
    }
    reset();
  });

  return (
    <form className={style.form} onSubmit={(data) => onSubmit(data)}>
      <div className={style.formContainer}>
        <InputForm<IsettingUpdatePassaword>
          errors={errors}
          id={'password'}
          name={'password'}
          register={register}
          type={'password'}
          label={t('password')}
          className={style.input}
          input_type={InputType.SIMPLE}
          classNameError={style.inputError}
        />
        <InputForm<IsettingUpdatePassaword>
          errors={errors}
          id={'newPassword'}
          name={'newPassword'}
          register={register}
          type={'password'}
          label={t('newPassword')}
          className={style.input}
          input_type={InputType.SIMPLE}
          classNameError={style.inputError}
        />
        <InputForm<IsettingUpdatePassaword>
          errors={errors}
          id={'confirmPassword'}
          name={'confirmPassword'}
          register={register}
          type={'password'}
          label={t('repeatPassword')}
          className={style.input}
          input_type={InputType.SIMPLE}
          classNameError={style.inputError}
        />
      </div>
      <button className={'text-white'}>
        <span>{t('send')}</span>
      </button>
    </form>
  );
};
