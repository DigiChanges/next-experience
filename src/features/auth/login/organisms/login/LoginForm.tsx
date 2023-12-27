'use client';
import React from 'react';
import style from './loginForm.module.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputForm } from '@/features/shared/atoms/inputForm/InputForm';
import { ILoginForm } from '../../interfaces/IloginForm';
import { handleSignIn } from '../../actions/loginAction';
import { loginSchema } from '../../validations/loginSchema';
import Link from 'next/link';
import { icons } from '@/features/shared/hooks/icons';
import { ButtonAuth } from '@/features/shared/atoms/button/ButtonAuth';
import {  toast } from 'react-toastify';
import { useTranslations } from 'next-intl';

export const LoginForm: React.FC = () => {
  const { IconRocket } = icons();
  const { reset, register, handleSubmit, formState: { errors } } = useForm<ILoginForm>({
    resolver: yupResolver(loginSchema)
  });
  const t = useTranslations('Login');
  const onSubmit = handleSubmit(async(data: ILoginForm) => {
    await  toast.promise(handleSignIn(data), {
      error: `${t('error')}`,
      success: `${t('success')}`,
      pending:`${t('pending')}`
    });
    reset();
  });

  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={(data) => onSubmit(data)} >
        <div >
          <InputForm<ILoginForm> errors={errors} id={'username'} name={'username'} register={register} type={'email'} label={t('username')}  className={style.input} />
          <InputForm<ILoginForm> errors={errors} id={'password'} name={'password'} register={register} type={'password'} label={t('password')}  className={style.input} />
        </div>
        <ButtonAuth alt={'icon next experience'} descriptionActive={'Sing In'} img={IconRocket.src} />
        <div className={style.containerRegister}>
          <Link href={'/auth/register'}>{t('createAccount')}</Link>
        </div>
      </form>
    </div>
  );
};

