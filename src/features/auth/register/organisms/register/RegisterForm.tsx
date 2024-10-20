import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { handleSignUp } from '@/features/auth/register/actions/registerAction';
import { IRegisterForm } from '@/features/auth/register/interfaces/IRegisterForm';
import { registerSchema } from '@/features/auth/register/validations/registerSchema';
import { ButtonAuth } from '@/features/shared/atoms/button/ButtonAuth';
import { InputForm, InputType } from '@/features/shared/atoms/inputForm/InputForm';

import style from './register.module.css';

export const RegisterForm = () => {
  const t = useTranslations('Register');
  const alert = useTranslations('ToastRegister');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IRegisterForm>({
    resolver: yupResolver(registerSchema),
  });
  const onSubmit = handleSubmit(async (data: IRegisterForm) => {
    await toast.promise(handleSignUp(data), {
      error: `${alert('error')}`,
      success: `${alert('success')}`,
      pending: `${alert('pending')}`,
    });
    reset();
  });

  return (
    <div className={style.container}>
      <h2>{t('title')}</h2>
      <h3>{t('subtitle')}</h3>
      <form className={style.form} onSubmit={(data) => onSubmit(data)}>
        <p className={style.text}>{t('text')}</p>
        <div className={style.containerInputs}>
          <InputForm<IRegisterForm>
            errors={errors}
            id={'name'}
            name={'name'}
            register={register}
            type={'text'}
            label={t('username')}
            className={style.input}
            input_type={InputType.SIMPLE}
            classNameError={style.inputError}
            placeholder={t('username')}
          />
          <InputForm<IRegisterForm>
            errors={errors}
            id={'lastname'}
            name={'lastname'}
            register={register}
            type={'text'}
            label={t('lastname')}
            className={style.input}
            input_type={InputType.SIMPLE}
            classNameError={style.inputError}
            placeholder={t('lastname')}
          />
          <InputForm<IRegisterForm>
            errors={errors}
            id={'phone'}
            name={'phone'}
            register={register}
            type={'number'}
            label={t('phone')}
            className={style.input}
            input_type={InputType.SIMPLE}
            classNameError={style.inputError}
            placeholder={t('phone')}
          />
          <InputForm<IRegisterForm>
            errors={errors}
            id={'email'}
            name={'email'}
            register={register}
            type={'email'}
            label={t('email')}
            className={style.input}
            input_type={InputType.SIMPLE}
            classNameError={style.inputError}
            placeholder={t('email')}
          />
          <InputForm<IRegisterForm>
            errors={errors}
            id={'password'}
            name={'password'}
            register={register}
            type={'password'}
            label={t('password')}
            className={style.input}
            input_type={InputType.SIMPLE}
            classNameError={style.inputError}
            placeholder={t('password')}
          />
          <InputForm<IRegisterForm>
            errors={errors}
            id={'confirmPassword'}
            name={'confirmPassword'}
            register={register}
            type={'password'}
            label={t('confirmPassword')}
            className={style.input}
            classNameError={style.inputError}
            input_type={InputType.SIMPLE}
            placeholder={t('confirmPassword')}
          />
        </div>
        <ButtonAuth descriptionActive={t('confirm')} />
        <Link href={'/auth/login'}>{t('terms&Agreements')}</Link>
        <div className={style.containerRegister}>
          <p>
            {t('singIn')}
            <Link href={'/auth/login'}>{t('singInLink')}</Link>
          </p>
        </div>
      </form>
    </div>
  );
};
