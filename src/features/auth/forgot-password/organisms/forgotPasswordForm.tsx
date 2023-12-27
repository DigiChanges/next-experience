'use client';
import React from 'react';
import style from './forgotPassword.module.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputForm } from '@/features/shared/atoms/inputForm/InputForm';
import {  toast } from 'react-toastify';
import { handleRecoverPassword } from '@/features/auth/forgot-password/actions/forgotPasswordAction';
import { forgoPasswordSchema } from '@/features/auth/forgot-password/validations/forgotPasswordSchema';
import { IforgotPasswordForm } from '@/features/auth/forgot-password/interfaces/IforgotPasswordForm';

export const ForgotPasswordForm: React.FC = () => {
  const { reset, register, handleSubmit, formState: { errors } } = useForm<IforgotPasswordForm>({
    resolver: yupResolver(forgoPasswordSchema)
  });

  const onSubmit = handleSubmit(async({ username }: IforgotPasswordForm) => {
    console.log('que llega', username);
    await  toast.promise(handleRecoverPassword(username), {
      error: 'Oops, something went wrong',
      success: 'Welcome to next experience',
      pending:'Loading your data...'
    });
    reset();
  });
  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={(data) => onSubmit(data)}>
        <div>
          <InputForm<IforgotPasswordForm> errors={errors} id={'username'} name={'username'} register={register} type={'email'} label={'Username'} className={style.input}/>
        </div>
        <button>Enviar</button>
        {/* <button onClick={() => handleRecoverPassword('alexisgraff123@gmail.com')} className="text-white">Recover password</button>*/}
      </form>
    </div>
  );
};

