import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslations } from 'next-intl';

import { useForm } from 'react-hook-form';

import { toast } from 'react-toastify';

import { updateUser } from '@/features/profile/actions/ProfileAction';
import { ProfileType as IProfileType } from '@/features/profile/interfaces/profileResponse';
import style from '@/features/profile/molecules/updateInfoUser/updateInfoUser.module.css';
import { profileUpdateSchema } from '@/features/profile/validations/profileUpdateSchema';
import { ButtonAuth } from '@/features/shared/atoms/button/ButtonAuth';
import { InputForm, InputType } from '@/features/shared/atoms/inputForm/InputForm';
import { UserHasRole } from '@/features/shared/interfaces/UserHasRole';

interface Props {
  edit: boolean;
  userProfile: UserHasRole;
  handleEditButton: () => void;
  phoneNumber: string;
}

export const UpdateInfoUser = ({ edit, userProfile, handleEditButton, phoneNumber }: Props) => {
  const t = useTranslations('Profile');
  const alert = useTranslations('ToastUpdate');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProfileType>({
    resolver: yupResolver(profileUpdateSchema),
  });

  const onSubmit = handleSubmit(async (data: IProfileType) => {
    await toast.promise(updateUser(data, userProfile.user_id.id), {
      error: `${alert('error')}`,
      success: `${alert('success')}`,
      pending: `${alert('pending')}`,
    });
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
        placeholder={userProfile.user_id.first_name ?? t('p_name')}
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
        placeholder={userProfile.user_id.last_name ?? t('p_lastname')}
        disabled={!edit && true}
      />
      <div>
        <p>{t('p_email')}:</p>
        <p className={style.infoUser}>{userProfile.user_id.email ?? <>{t('p_email')}</>}</p>
      </div>
      <InputForm<IProfileType>
        errors={errors}
        id={'phone'}
        name={'phone'}
        register={register}
        type={'text'}
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
