'use client';
import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { InfoUser } from '@/features/profile/molecules/infoUser/infoUser';
import { UpdateInfoUser } from '@/features/profile/molecules/updateInfoUser/updateInfoUser';
import { UserImage } from '@/features/profile/molecules/userImage/UserImage';

import { UserHasRole } from '@/features/shared/interfaces/UserHasRole';

import style from './profile.module.css';

type Props = {
  userProfile: UserHasRole;
};

export const Profile = ({ userProfile }: Props) => {
  const t = useTranslations('Profile');
  const [edit, setEdit] = React.useState(false);

  const phoneNumber =
    userProfile.user_id.phone && userProfile.user_id.phone?.length > 0 ? userProfile.user_id.phone : t('p_phone');

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
        <div className={style.containerList} id={userProfile.user_id.id}>
          <UserImage userProfile={userProfile} edit={edit} />
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
