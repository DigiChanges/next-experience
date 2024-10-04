'use client';
import React from 'react';
import { useTranslations } from 'next-intl';
import style from './profile.module.css';
import Link from 'next/link';
import { images } from '@/features/shared/hooks/images';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputForm, InputType } from '@/features/shared/atoms/inputForm/InputForm';
import { profileImageSchema } from '@/features/profile/validations/profileImageSchema';
import { handleUploadFile } from '@/features/shared/actions/fileAction';
import { toast } from 'react-toastify';
import { uploadUser } from '@/features/profile/actions/ProfileAction';

type IProfileForm = {
  file?: object | null | undefined;
  image_id?: string| null | undefined;
}

type Props = {
    userProfile: {
        phone: string | null;
        email: string | null;
        last_name: string | null;
        first_name: string | null;
        id: string;
        image_id:  string | null;
    };
};

export const Profile = ({ userProfile }: Props) => {
  const t = useTranslations('Profile');
  const alert = useTranslations('ToastUpdate');

  const { register, setValue, formState: { errors } } = useForm<IProfileForm>({
    resolver: yupResolver(profileImageSchema)
  });
  const { user } = images();

  const phoneNumber =  userProfile.phone && userProfile.phone?.length > 0 ? userProfile.phone : <>{t('p_phone')}</>;

  const handleFileInputClick = () => {
    const input: HTMLElement | null = document.getElementById('file');

    if (input) {
      input.click();
    }
  };

  const handleChange = async(event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    if (event.target.files && event.target.files[0]) {
      const file = new FormData();
      file.append('file', event.target.files[0]);
      const file_id = await handleUploadFile(file);

      if (file_id) {
        setValue('file', file_id.id);
        await toast.promise(uploadUser(file_id.id, userProfile.id), {
          error: `${alert('error')}`,
          success: `${alert('success')}`,
          pending: `${alert('pending')}`
        });
      }
    }
  };

  return (
    <div className={style.container}>
      <div className={style.containerUrl}>
        <p>{t('home')}</p><span>›</span>
        <Link href={'/dashboard'}>{t('Dashboard')}</Link><span>›
        </span><p
          className={style.urlActive}>{t('Profile')}</p>
      </div>
      <div className={style.containerProfile}>
        <h1 data-aos="fade-down" data-aos-duration="1500">
          {t('title')}
        </h1>
        <div className={style.containerList} id={userProfile.id}>
          <div className={style.containerImg}>
            <Image src={user} alt={'user'} className={style.user}/>
            <div onClick={handleFileInputClick} style={{ cursor: 'pointer' }}>
              <svg
                className={style.pencil}
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 32 32"
                preserveAspectRatio="xMidYMid meet"
              >
                <g transform="translate(0,26) scale(0.1,-0.1)" fill="currentColor" stroke="none">
                  <path
                    d="M27 232 c-26 -28 -24 -182 1 -205 28 -26 182 -24 205 1 26 28 24 182 -1 205 -28 26 -182 24 -205 -1z m171 -34 c16 -16 15 -43 -3 -58 -12 -10 -20 -9 -40 4 -14 9 -25 22 -25 29 0 18 21 37 40 37 9 0 21 -5 28 -12z m-61 -116 c-41 -42 -87 -45 -87 -5 0 17 12 39 31 59 l32 33 27 -27 28 -27 -31 -33z"/>
                </g>
              </svg>
            </div>
          </div>
          <div  className={style.hiddenInput}>
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
          <Link className={style.password} href={'/settings'}>Editar contraseña</Link>
        </div>
      </div>
    </div>
  );
};
