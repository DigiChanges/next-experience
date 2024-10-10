'use client';
import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { ButtonAuth } from '@/features/shared/atoms/button/ButtonAuth';
import { InputForm, InputType } from '@/features/shared/atoms/inputForm/InputForm';
import { icons } from '@/features/shared/hooks/icons';

import { handleSignIn } from '../../actions/loginAction';
import { ILoginForm } from '../../interfaces/IloginForm';
import { loginSchema } from '../../validations/loginSchema';

import style from './login-form.module.css';

export const LoginForm = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({
    resolver: yupResolver(loginSchema),
  });
  const t = useTranslations('Login');
  const alerts = useTranslations('ToastLogin');
  const { IoPersonCircleSharp } = icons();

  const onSubmit = handleSubmit(async (data: ILoginForm) => {
    await toast.promise(handleSignIn(data), {
      error: `${alerts('error')}`,
      success: `${alerts('success')}`,
      pending: `${alerts('pending')}`,
    });
    reset();
  });

  return (
    <div className={style.container}>
      <IoPersonCircleSharp />
      <h2>{t('title')}</h2>
      <h3>{t('subtitle')}</h3>
      <form className={style.form} onSubmit={(data) => onSubmit(data)}>
        <div>
          <InputForm<ILoginForm>
            errors={errors}
            id={'username'}
            name={'username'}
            register={register}
            input_type={InputType.SIMPLE}
            type={'email'}
            label={t('username')}
            placeholder={t('username')}
            className={style.input}
            classNameError={style.inputError}
          />
          <InputForm<ILoginForm>
            errors={errors}
            id={'password'}
            name={'password'}
            register={register}
            input_type={InputType.SIMPLE}
            type={'password'}
            label={t('password')}
            placeholder={t('password')}
            className={style.input}
            classNameError={style.inputError}
          />
        </div>
        <ButtonAuth descriptionActive={t('singIn')} />
        <div className={style.containerRegister}>
          <p>
            {t('createAccountTitle')}
            <Link href={'/auth/register'}>{t('linkCreateAccount')}</Link>
          </p>
        </div>
        <Link href={'/auth/forgot-password'} className={style.linkForgot}>
          {t('forgotPassword')}
        </Link>
      </form>
    </div>
  );
};
