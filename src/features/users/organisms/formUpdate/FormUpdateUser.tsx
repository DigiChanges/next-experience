'use client';
import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { InputForm, InputType } from '@/features/shared/atoms/inputForm/InputForm';
import { BtnFormCreateUpdate } from '@/features/shared/molecules/btnFormCreateUpdate/BtnFormCreateUpdate';
import { activeOptions, rolesOptions } from '@/features/users/constants/selectOptionsData';
import { ICreateUser } from '@/features/users/interfaces/ICreateUser';
import { UserPayload } from '@/features/users/interfaces/usersResponse';
import style from '@/features/users/organisms/formUpdate/formUpdateUser.module.css';
import { createUserSchema } from '@/features/users/validations/usersSchema';

type Props = {
  id: string;
  data: {
    role: string;
    active: boolean;
    name: string;
    lastName: string;
    phone: number;
    email: string;
  };
};
export const FormUpdateUser = ({ id, data }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateUser>({
    defaultValues: {
      role: data.role,
      active: data.active,
      name: data.name,
      lastName: data.lastName,
      phone: data.phone,
      email: data.email,
    },
    resolver: yupResolver(createUserSchema),
  });
  const alert = useTranslations('ToastUpdate');
  const t = useTranslations('UserList');
  const s = useTranslations('Shared');

  // TODO: acá falta cambiar el updateItem y descomentar
  const updateAction = async (data: UserPayload) => {
     await toast.promise(updateItem({ id, data }), {
        error: `${alert('error')}`,
        success: `${alert('success')}`,
        pending: `${alert('pending')}`,
    });
  };
  return (
    <form
      className={style.form}
      onSubmit={handleSubmit(async (data) => {
        await updateAction(data);
      })}
    >
      <div>
        <InputForm<ICreateUser>
          type={'text'}
          name={'role'}
          label={t('role')}
          register={register}
          errors={errors}
          id={'role'}
          className={style.inputBlock}
          input_type={InputType.SELECT}
          classNameError={style.inputError}
          options={rolesOptions}
        />
        <InputForm<ICreateUser>
          type={'text'}
          name={'active'}
          label={t('active')}
          register={register}
          errors={errors}
          id={'active'}
          className={style.inputBlock}
          input_type={InputType.SELECT}
          classNameError={style.inputError}
          options={activeOptions}
        />
        <InputForm<ICreateUser>
          type={'text'}
          name={'name'}
          label={t('name')}
          register={register}
          errors={errors}
          id={'name'}
          className={style.inputBlock}
          input_type={InputType.SIMPLE}
          classNameError={style.inputError}
        />
        <InputForm<ICreateUser>
          type={'text'}
          name={'lastName'}
          label={t('lastName')}
          register={register}
          errors={errors}
          id={'lastName'}
          className={style.inputBlock}
          input_type={InputType.SIMPLE}
          classNameError={style.inputError}
        />
        <InputForm<ICreateUser>
          type={'number'}
          name={'phone'}
          label={t('phone')}
          register={register}
          errors={errors}
          id={'phone'}
          className={style.inputBlock}
          input_type={InputType.SIMPLE}
          classNameError={style.inputError}
        />
        <InputForm<ICreateUser>
          type={'email'}
          name={'email'}
          label={t('email')}
          register={register}
          errors={errors}
          id={'email'}
          className={style.inputBlock}
          input_type={InputType.SIMPLE}
          classNameError={style.inputError}
        />
      </div>
      <BtnFormCreateUpdate
        linkCancel={t('linkUsers')}
        textCancel={s('cancel')}
        disabledButton={false}
        textSubmit={t('add')}
      />
    </form>
  );
};
