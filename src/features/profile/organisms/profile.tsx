import React from 'react';
import { useTranslations } from 'next-intl';
import style from './profile.module.css';
import Link from 'next/link';
import { images } from '@/features/shared/hooks/images';
import IconPencil from '../../../asset/images/pencil.svg';
import Image from 'next/image';

export const Profile = () => {
  const t = useTranslations('Profile');
  const { user } = images();

  return (
    <div className={style.container}>
      <div className={style.containerUrl}>
        <p>{t('home')}</p><span>›</span><Link href={'/dashboard'}>{t('Dashboard')}</Link><span>›</span><p className={style.urlActive}>{t('Profile')}</p>
      </div>
      <div className={style.containerProfile}>
        <h1 data-aos="fade-down" data-aos-duration="1500">
          {t('title')}
        </h1>
        <div className={style.containerList}>
          <div className={style.containerImg}>
            <Image className={style.user} src={user} alt={'user'} />
            <Image className={style.pencil} src={IconPencil} alt={'IconPencil'} />
          </div>
          <div>
            <p>{t('p_name')}:</p>
            <p className={style.infoUser}>Maria</p>
          </div>
          <div>
            <p>{t('p_lastname')}:</p>
            <p className={style.infoUser}>Pepita</p>
          </div>
          <div>
            <p>{t('p_email')}:</p>
            <p className={style.infoUser}>pepita@gmail.com</p>
          </div>
          <div>
            <p>{t('p_phone')}:</p>
            <p className={style.infoUser}>123123123</p>
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
