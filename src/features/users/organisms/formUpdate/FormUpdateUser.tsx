'use client';
import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { updateUser } from '@/features/profile/actions/ProfileAction';
import { User } from '@/features/shared/actions/fetchUsers';
import { InputForm, InputType } from '@/features/shared/atoms/inputForm/InputForm';
import { BtnFormCreateUpdate } from '@/features/shared/molecules/btnFormCreateUpdate/BtnFormCreateUpdate';
import { activeOptions } from '@/features/users/constants/selectOptionsData';
import { transformToInputOptions } from '@/features/users/helpers/transformToInputOptions';
import { IUpdateUser, UserUpdatePayload } from '@/features/users/interfaces/IUpdateUser';
import { RolesResponse } from '@/features/users/interfaces/rolesResponse';
import style from '@/features/users/organisms/formUpdate/formUpdateUser.module.css';
import { updateUserSchema } from '@/features/users/validations/usersSchema';

type Props = {
  id: string;
  data: User;
  roles: RolesResponse[];
};

export const FormUpdateUser = ({ id, data, roles }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUpdateUser>({
    defaultValues: {
      role: data.role.id,
      account_active: data.account_active,
      first_name: data.first_name ?? undefined,
      last_name: data.last_name ?? undefined,
      phone: Number(data.phone) ?? undefined,
      email: data.email ?? undefined,
    },
    resolver: yupResolver(updateUserSchema),
  });

  const alert = useTranslations('ToastUpdate');
  const t = useTranslations('UserList');
  const s = useTranslations('Shared');

  const rolesTransformed = transformToInputOptions(roles);

  const updateAction = async (data: UserUpdatePayload) => {
    await toast.promise(updateUser(data, id), {
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
        <InputForm<IUpdateUser>
          type={'text'}
          name={'role'}
          label={t('role')}
          register={register}
          errors={errors}
          id={'role'}
          className={style.inputBlock}
          input_type={InputType.SELECT}
          classNameError={style.inputError}
          options={rolesTransformed}
        />
        <InputForm<IUpdateUser>
          type={'text'}
          name={'account_active'}
          label={t('active')}
          register={register}
          errors={errors}
          id={'account_active'}
          className={style.inputBlock}
          input_type={InputType.SELECT}
          classNameError={style.inputError}
          options={activeOptions}
        />
        <InputForm<IUpdateUser>
          type={'text'}
          name={'first_name'}
          label={t('name')}
          register={register}
          errors={errors}
          id={'first_name'}
          className={style.inputBlock}
          input_type={InputType.SIMPLE}
          classNameError={style.inputError}
        />
        <InputForm<IUpdateUser>
          type={'text'}
          name={'last_name'}
          label={t('lastName')}
          register={register}
          errors={errors}
          id={'last_name'}
          className={style.inputBlock}
          input_type={InputType.SIMPLE}
          classNameError={style.inputError}
        />
        <InputForm<IUpdateUser>
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
        <InputForm<IUpdateUser>
          type={'email'}
          name={'email'}
          label={t('email')}
          register={register}
          errors={errors}
          id={'email'}
          disabled={true}
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
