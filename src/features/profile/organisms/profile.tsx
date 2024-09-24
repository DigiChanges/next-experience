import React from 'react';
import { useTranslations } from 'next-intl';
import style from './profile.module.css';
import Link from 'next/link';

export const Profile = () => {
  const t = useTranslations('Profile');

  return (
    <div className={style.container}>
      <div className={style.containerUrl}>
        <p>{t('home')}</p><span>›</span><Link href={'/dashboard'}>{t('Dashboard')}</Link><span>›</span><p className={style.urlActive}>{t('Profile')}</p>
      </div>
      <div className={style.containerProfile}>
        <h1 data-aos="fade-down" data-aos-duration="1500">
          {t('title')}
        </h1>
        <h2>{t('description')}</h2>
        <div className={style.containerList}>
          <div>
            <p>{t('p_name')}:</p>
            <p>Maria</p>
          </div>
          <div>
            <p>{t('p_lastname')}:</p>
            <p>Pepita</p>
          </div>
          <div>
            <p>{t('p_email')}:</p>
            <p>pepita@gmail.com</p>
          </div>
          <div>
            <p>{t('p_phone')}:</p>
            <p>123123123</p>
          </div>
        </div>
        <Link href={'/settings'}>Editar contraseña</Link>
      </div>
    </div>
  );
};
