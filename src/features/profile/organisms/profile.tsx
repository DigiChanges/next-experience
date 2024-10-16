'use client';
import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { InfoUser } from '@/features/profile/molecules/infoUser/infoUser';
import { UpdateFile } from '@/features/profile/molecules/updateFile/updateFile';
import { UpdateInfoUser } from '@/features/profile/molecules/updateInfoUser/updateInfoUser';
import { User } from '@/features/shared/actions/fetchUsers';

import style from './profile.module.css';

type Props = {
  userProfile: User;
};

export const Profile = ({ userProfile }: Props) => {
  const t = useTranslations('Profile');
  const [edit, setEdit] = React.useState(false);

  const phoneNumber = userProfile.phone && userProfile.phone?.length > 0 ? userProfile.phone : t('p_phone');

  const handleEditButton = () => {
    if (!edit) {
      setEdit(true);
    } else {
      setEdit(false);
    }
  };

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
          <UpdateFile userProfile={userProfile} />
          {edit ? (
            <UpdateInfoUser
              edit={edit}
              userProfile={userProfile}
              handleEditButton={handleEditButton}
              phoneNumber={phoneNumber}
            />
          ) : (
            <InfoUser userProfile={userProfile} handleEditButton={handleEditButton} phoneNumber={phoneNumber} />
          )}
        </div>
      </div>
    </div>
  );
};
