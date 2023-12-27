'use client';
import React, { useState } from 'react';
import style from './forgotPassword.module.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputForm } from '@/features/shared/atoms/inputForm/InputForm';
import {  toast } from 'react-toastify';
import { handleRecoverPassword } from '@/features/auth/forgot-password/actions/forgotPasswordAction';
import { forgoPasswordSchema } from '@/features/auth/forgot-password/validations/forgotPasswordSchema';
import { IforgotPasswordForm } from '@/features/auth/forgot-password/interfaces/IforgotPasswordForm';
import { Show } from '@/features/shared/atoms/show/Show';
import { useTranslations } from 'next-intl';

export const ForgotPasswordForm: React.FC = () => {
  const { reset, register, handleSubmit, formState: { errors } } = useForm<IforgotPasswordForm>({
    resolver: yupResolver(forgoPasswordSchema)
  });
  const [message, setMessage] = useState(false);
  const t = useTranslations('Forgot');
  const alerts = useTranslations('ToastForgot');
  const onSubmit = handleSubmit(async({ username }: IforgotPasswordForm) => {
    await  toast.promise(handleRecoverPassword(username), {
      error: `${alerts('error')}`,
      success: `${alerts('success')}`,
      pending:`${alerts('pending')}`
    });
    setMessage(true);

    reset();
  });
  return (
    <div className={style.container}>
      {
        !message && <form className={style.form} onSubmit={(data) => onSubmit(data)}>
          <div className={style.containerDescription}>
            <h1>{t('title')}</h1>
            <h2>{t('description')}</h2>
          </div>
          <div>
            <InputForm<IforgotPasswordForm> errors={errors} id={'username'} name={'username'} register={register} type={'email'} label={t('email')} className={style.input}/>
          </div>
          <button>{t('send')}</button>
        </form>
      }
      <Show when={message}>
        <h2 className={style.message}>{t('message')}</h2>
      </Show>
    </div>
  );
};

