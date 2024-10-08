'use client';
import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { uploadUser, User } from '@/features/profile/actions/ProfileAction';
import { profileImageSchema } from '@/features/profile/validations/profileImageSchema';
import { handleUploadFile } from '@/features/shared/actions/fileAction';
import { InputForm, InputType } from '@/features/shared/atoms/inputForm/InputForm';
import { images } from '@/features/shared/hooks/images';

import IconPencil from '../../../asset/images/pencil.svg';
import IconPencilWhite from '../../../asset/images/pencilWhite.svg';

import style from './profile.module.css';

type IProfileForm = {
  file?: object | null;
  image_id?: string | null;
};

type Props = {
    userProfile: User
};

export const Profile = ({ userProfile }: Props) => {
  const t = useTranslations('Profile');
  const alert = useTranslations('ToastUpdate');
  const { theme } = useTheme();
  const pencilToggle = theme === 'dark' ? IconPencilWhite : IconPencil;

  const {
    register,
    setValue,
    formState: { errors },
  } = useForm<IProfileForm>({
    resolver: yupResolver(profileImageSchema),
  });
  const { user } = images();

  const phoneNumber = userProfile.phone && userProfile.phone?.length > 0 ? userProfile.phone : <>{t('p_phone')}</>;

  const handleFileInputClick = () => {
    const input: HTMLElement | null = document.getElementById('file');

    if (input) {
      input.click();
    }
  };

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    if (event.target.files?.[0]) {
      const file = new FormData();
      file.append('file', event.target.files[0]);
      const file_id = await handleUploadFile(file);

      if (file_id) {
        setValue('file', file_id.id);
        await toast.promise(uploadUser(file_id.id, userProfile.id), {
          error: `${alert('error')}`,
          success: `${alert('success')}`,
          pending: `${alert('pending')}`,
        });
      }
    }
  };

  const profileImage = userProfile.image_id ?? user;

  return (
    <div className={style.container}>
      <div className={style.containerUrl}>
        <p>{t('home')}</p>
        <span>›</span>
        <Link href={'/dashboard'}>{t('Dashboard')}</Link>
        <span>›</span>
        <p className={style.urlActive}>{t('Profile')}</p>
      </div>
      <div className={style.containerProfile}>
        <h1 data-aos='fade-down' data-aos-duration='1500'>
          {t('title')}
        </h1>
        <div className={style.containerList} id={userProfile.id}>
          <div className={style.containerImg}>
            <Image src={profileImage} alt={'user'} width={82} height={82} className={style.profileImage} />
            <button onClick={handleFileInputClick}>
              <Image src={pencilToggle} alt={'pencil'} className={style.pencil} />
            </button>
          </div>
          <div className={style.hiddenInput}>
            <InputForm
              type={'file'}
              name={'file'}
              label={'Image'}
              register={register}
              errors={errors}
              id={'file'}
              input_type={InputType.FILE}
              className={style.hiddenInput}
              onChange={handleChange}
            />
          </div>
          <div>
            <p>{t('p_name')}:</p>
            <p className={style.infoUser}>{userProfile.first_name ?? <>{t('p_name')}</>}</p>
          </div>
          <div>
            <p>{t('p_lastname')}:</p>
            <p className={style.infoUser}>{userProfile.last_name ?? <>{t('p_lastname')}</>}</p>
          </div>
          <div>
            <p>{t('p_email')}:</p>
            <p className={style.infoUser}>{userProfile.email ?? <>{t('p_email')}</>}</p>
          </div>
          <div>
            <p>{t('p_phone')}:</p>
            <p className={style.infoUser}>{phoneNumber}</p>
          </div>
        </div>
        <div className={style.containerButtons}>
          <Link href={'/dashboard'}>Volver a home</Link>
          <Link className={style.password} href={'/settings'}>
            Editar contraseña
          </Link>
        </div>
      </div>
    </div>
  );
};
