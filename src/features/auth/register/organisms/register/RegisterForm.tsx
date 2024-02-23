import React from 'react';
import { useForm } from 'react-hook-form';
import { IRegisterForm } from '@/features/auth/register/interfaces/IRegisterForm';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from '@/features/auth/register/validations/registerSchema';
import { handleSignUp } from '@/features/auth/register/actions/registerAction';
import { InputForm } from '@/features/shared/atoms/inputForm/InputForm';
import style from './register.module.css';
import Link from 'next/link';
import { icons } from '@/features/shared/hooks/icons';
import { ButtonAuth } from '@/features/shared/atoms/button/ButtonAuth';
import { toast } from 'react-toastify';
import { useTranslations } from 'next-intl';

export const RegisterForm: React.FC = () => {
  const { IconRocket } = icons();
  const t = useTranslations('Register');
  const alert = useTranslations('ToastRegister');

  const { register, handleSubmit, formState: { errors }, reset } = useForm<IRegisterForm>({
    resolver: yupResolver(registerSchema)
  });
  const onSubmit = handleSubmit(async(data: IRegisterForm) => {
    await  toast.promise(handleSignUp(data), {
      error: `${alert('error')}`,
      success: `${alert('success')}`,
      pending:`${alert('pending')}`
    });
    reset();
  });

  return (
    <div className={style.container}>
      <form  className={style.form}  onSubmit={(data) => onSubmit(data)}>
        <div className={style.containerInputs}>
          <InputForm<IRegisterForm> errors={errors} id={'username'} name={'username'} register={register} type={'email'} label={t('username')} className={style.input}/>
          <InputForm<IRegisterForm> errors={errors} id={'password'} name={'password'} register={register} type={'password'} label={t('password')} className={style.input}/>
          <InputForm<IRegisterForm> errors={errors} id={'confirmPassword'} name={'confirmPassword'} register={register} type={'password'} label={t('confirmPassword')} className={style.input}/>
        </div>
        <ButtonAuth alt={'icon next experience'} descriptionActive={t('confirm')} img={IconRocket.src}/>
        <div className={style.containerRegister}>
          <Link href={'/auth/login'}>{t('singIn')}</Link>
        </div>
      </form>
    </div>
  );
};

