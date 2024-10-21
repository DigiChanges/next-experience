'use client';
import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { handleRecoveryCode } from '@/features/auth/recovery-code/actions/recoveryCodeAction';
import { IrecoveryCode } from '@/features/auth/recovery-code/interfaces/IrecoveryCode';
import { recoveryCodeSchema } from '@/features/auth/recovery-code/validations/recoveryCodeSchema';
import { ButtonAuth } from '@/features/shared/atoms/button/ButtonAuth';
import { InputForm, InputType } from '@/features/shared/atoms/inputForm/InputForm';

import style from './recovery-code.module.css';

export const RecoveryCode = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IrecoveryCode>({
    resolver: yupResolver(recoveryCodeSchema),
  });
  const searchParams = useSearchParams();
  let email = searchParams.get('email');
  const t = useTranslations('RecoveryCode');
  const alerts = useTranslations('ToastLogin');

  const onSubmit = handleSubmit(async (data: IrecoveryCode) => {
    if (email === null) {
      email = '';
    }
    await toast.promise(handleRecoveryCode(email, data), {
      error: `${alerts('error')}`,
      success: `${alerts('success')}`,
      pending: `${alerts('pending')}`,
    });
    reset();
  });
  return (
    <div className={style.container}>
      <h1>{t('title')}</h1>
      <h2>{t('description')}</h2>
      <h3>{t('description2')}</h3>
      <form className={style.form} onSubmit={(data) => onSubmit(data)}>
        <InputForm<IrecoveryCode>
          errors={errors}
          id={'code'}
          name={'code'}
          register={register}
          type={'text'}
          label={t('code')}
          className={style.input}
          input_type={InputType.SIMPLE}
          placeholder={t('code')}
          classNameError={style.inputError}
        />
        <ButtonAuth descriptionActive={t('send')} />
        <div className={style.containerRegister}>
          <p>
            {t('singIn')}
            <Link href={'/auth/login'}>{t('singInLink')}</Link>
          </p>
        </div>
        <div className={style.containerRegister}>
          <Link href={'/auth/recovery-code'}>{t('codeLink')}</Link>
        </div>
      </form>
    </div>
  );
};
