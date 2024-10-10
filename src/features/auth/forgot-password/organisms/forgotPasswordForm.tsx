'use client';
import React, { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { handleRecoverPassword } from '@/features/auth/forgot-password/actions/forgotPasswordAction';
import { IforgotPasswordForm } from '@/features/auth/forgot-password/interfaces/IforgotPasswordForm';
import { forgoPasswordSchema } from '@/features/auth/forgot-password/validations/forgotPasswordSchema';
import { ButtonAuth } from '@/features/shared/atoms/button/ButtonAuth';
import { InputForm, InputType } from '@/features/shared/atoms/inputForm/InputForm';

import style from './forgot-password.module.css';

export const ForgotPasswordForm = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IforgotPasswordForm>({
    resolver: yupResolver(forgoPasswordSchema),
  });
  const [message, setMessage] = useState(false);
  const t = useTranslations('Forgot');
  const alerts = useTranslations('ToastForgot');
  const onSubmit = handleSubmit(async ({ username }: IforgotPasswordForm) => {
    await toast.promise(handleRecoverPassword(username), {
      error: `${alerts('error')}`,
      success: `${alerts('success')}`,
      pending: `${alerts('pending')}`,
    });
    setMessage(true);
    reset();
  });
  return (
    <div className={style.container}>
      {!message && (
        <>
          <h1>{t('title')}</h1>
          <h2>{t('description')}</h2>
          <form className={style.form} onSubmit={(data) => onSubmit(data)}>
            <div>
              <InputForm<IforgotPasswordForm>
                errors={errors}
                id={'username'}
                name={'username'}
                register={register}
                type={'email'}
                label={t('email')}
                className={style.input}
                input_type={InputType.SIMPLE}
                placeholder={t('email')}
                classNameError={style.inputError}
              />
            </div>
            <ButtonAuth descriptionActive={t('send')} />
            <div className={style.containerRegister}>
              <p>{t('singIn')}</p>
              <Link href={'/auth/login'}>{t('singInLink')}</Link>
            </div>
            <div className={style.containerRegister}>
              <p>
                <Link href={'/auth/register'}>{t('registerLink')}</Link>
                {t('register')}
              </p>
            </div>
          </form>{' '}
        </>
      )}
      {message && (
        <div className={style.message}>
          <h2>{t('message')}</h2>
          <h3>{t('messageSubtitle')}</h3>
        </div>
      )}
    </div>
  );
};
