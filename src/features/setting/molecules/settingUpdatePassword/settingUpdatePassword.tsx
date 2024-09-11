'use client';
import React from 'react';
import style from './settingUpdatePassword.module.css';
import { InputForm } from '@/features/shared/atoms/inputForm/InputForm';
import { toast } from 'react-toastify';
import { handleUpdatePassword } from '@/features/auth/update-password/actions/updatePasswordAction';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { settingUpdatePasswordSchema } from '@/features/setting/validations/settingUpdatePasswordSchema';
import { IsettingUpdatePassaword } from '@/features/setting/interfaces/IsettingUpdatePassaword';

export const SettingUpdatePassword: React.FC = () => {
  const { reset, register, handleSubmit, formState: { errors } } = useForm<IsettingUpdatePassaword>({
    resolver: yupResolver(settingUpdatePasswordSchema)
  });
  const searchParams = useSearchParams();
  const code = searchParams.get('code');
  const t = useTranslations('UpdatePss');
  const alerts = useTranslations('ToastUpdatePass');
  const onSubmit = handleSubmit(async({ password }: IsettingUpdatePassaword) => {
    if (code){
      await  toast.promise(handleUpdatePassword(password, code), {
        error: `${alerts('error')}`,
        success: `${alerts('success')}`,
        pending:`${alerts('pending')}`
      });
    }
    reset();
  });

  return (
    <form className={style.form} onSubmit={(data) => onSubmit(data)}>
      <div>
        <InputForm<IsettingUpdatePassaword> errors={errors} id={'password'} name={'password'} register={register}
          type={'password'} label={t('password')} className={style.input}
          classNameError={style.inputError}/>
        <InputForm<IsettingUpdatePassaword> errors={errors} id={'newPassword'} name={'newPassword'}
          register={register} type={'password'} label={t('newPassword')}
          className={style.input}
          classNameError={style.inputError}/>
        <InputForm<IsettingUpdatePassaword> errors={errors} id={'confirmPassword'} name={'confirmPassword'}
          register={register} type={'password'} label={t('repeatPassword')}
          className={style.input}
          classNameError={style.inputError}/>
      </div>
      <button className={'text-white'}><span>{t('send')}</span></button>
    </form>
  );
};
