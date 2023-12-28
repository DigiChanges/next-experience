'use client';
import React  from 'react';
import style from './updatePassword.module.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputForm } from '@/features/shared/atoms/inputForm/InputForm';
import { useTranslations } from 'next-intl';
import { handleUpdatePassword } from '@/features/auth/update-password/actions/updatePasswordAction';
import { useSearchParams } from 'next/navigation';
import { IupdatePasswordForm } from '@/features/auth/update-password/interfaces/IupdatePassaword';
import { updateSchema } from '@/features/auth/update-password/validations/updatePasswordSchema';
import { toast } from 'react-toastify';


export const UpdatePasswordForm: React.FC = () => {
  const { reset, register, handleSubmit, formState: { errors } } = useForm<IupdatePasswordForm>({
    resolver: yupResolver(updateSchema)
  });
  const searchParams = useSearchParams();
  const code = searchParams.get('code');
  const t = useTranslations('UpdatePss');
  const alerts = useTranslations('ToastUpdatePass');

  const onSubmit = handleSubmit(async({ password }: IupdatePasswordForm) => {
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
    <div className={style.container}>
      <form className={style.form} onSubmit={(data) => onSubmit(data)}>
        <div className={style.containerDescription}>
          <h1>{t('title')}</h1>
          <h2>{t('description')}</h2>
        </div>
        <div>
          <InputForm<IupdatePasswordForm> errors={errors} id={'password'} name={'password'} register={register} type={'password'} label={t('password')} className={style.input}/>
          <InputForm<IupdatePasswordForm> errors={errors} id={'confirmPassword'} name={'confirmPassword'} register={register} type={'password'} label={t('repeatPassword')} className={style.input}/>
        </div>
        <button className={'text-white'}>{t('send')}</button>
      </form>

    </div>
  );
};

