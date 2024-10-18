import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import style from '@/features/profile/molecules/infoUser/infoUser.module.css';

interface Props {
  userProfile: any;
  handleEditButton: () => void;
  phoneNumber: string;
}
export const InfoUser = ({ userProfile, handleEditButton, phoneNumber }: Props) => {
  const t = useTranslations('Profile');

  return (
    <>
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
      <div className={style.containerButtons}>
        <Link className={style.buttonSecondary} href={'/settings'}>
          {t('p_change_password')}
        </Link>
        <button className={style.buttonEdit} onClick={handleEditButton}>
          {t('p_edit')}
        </button>
      </div>
    </>
  );
};
