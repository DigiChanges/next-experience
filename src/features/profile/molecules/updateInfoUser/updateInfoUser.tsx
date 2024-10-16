import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslations } from 'next-intl';

import { useForm } from 'react-hook-form';

import { toast } from 'react-toastify';

import { handleSignUp } from '@/features/auth/register/actions/registerAction';
import { ProfileType as IProfileType } from '@/features/profile/interfaces/profileResponse';
import style from '@/features/profile/molecules/updateInfoUser/updateInfoUser.module.css';
import { profileUpdateSchema } from '@/features/profile/validations/profileUpdateSchema';
import { User } from '@/features/shared/actions/fetchUsers';
import { ButtonAuth } from '@/features/shared/atoms/button/ButtonAuth';
import { InputForm, InputType } from '@/features/shared/atoms/inputForm/InputForm';

interface Props {
  edit: boolean;
  userProfile: User;
  handleEditButton: () => void;
  phoneNumber: string;
}
export const UpdateInfoUser = ({ edit, userProfile, handleEditButton, phoneNumber }: Props) => {
  const t = useTranslations('Profile');
  const alert = useTranslations('ToastUpdate');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IProfileType>({
    resolver: yupResolver(profileUpdateSchema),
  });

  // TODO: acá falta cambiar el handleSignUp por lo que corresponda
  const onSubmit = handleSubmit(async (data: IProfileType) => {
    await toast.promise(handleSignUp(data), {
      error: `${alert('error')}`,
      success: `${alert('success')}`,
      pending: `${alert('pending')}`,
    });
    reset();
  });

  return (
    <form className={style.form} onSubmit={(data) => onSubmit(data)}>
      <InputForm<IProfileType>
        errors={errors}
        id={'first_name'}
        name={'first_name'}
        register={register}
        type={'text'}
        label={`${t('p_name')}:`}
        className={style.infoUserEdit}
        input_type={InputType.SIMPLE}
        classNameError={style.inputError}
        placeholder={userProfile.first_name ?? t('p_name')}
        disabled={!edit && true}
      />
      <InputForm<IProfileType>
        errors={errors}
        id={'last_name'}
        name={'last_name'}
        register={register}
        type={'text'}
        label={`${t('p_lastname')}:`}
        className={style.infoUserEdit}
        input_type={InputType.SIMPLE}
        classNameError={style.inputError}
        placeholder={userProfile.last_name ?? t('p_lastname')}
        disabled={!edit && true}
      />
      <InputForm<IProfileType>
        errors={errors}
        id={'email'}
        name={'email'}
        register={register}
        type={'email'}
        label={`${t('p_email')}:`}
        className={style.infoUserNotEdit}
        input_type={InputType.SIMPLE}
        classNameError={style.inputError}
        placeholder={userProfile.email ?? t('p_email')}
        disabled={true}
      />
      <InputForm<IProfileType>
        errors={errors}
        id={'phone'}
        name={'phone'}
        register={register}
        type={'number'}
        label={`${t('p_phone')}:`}
        className={style.infoUserEdit}
        input_type={InputType.SIMPLE}
        classNameError={style.inputError}
        placeholder={phoneNumber}
        disabled={!edit && true}
      />
      <div className={style.containerButtons}>
        <button className={style.buttonSecondary} onClick={handleEditButton}>
          {t('p_cancel')}
        </button>
        <ButtonAuth styleButton={style.buttonEdit} descriptionActive={t('p_confirm')} />
      </div>
    </form>
  );
};
