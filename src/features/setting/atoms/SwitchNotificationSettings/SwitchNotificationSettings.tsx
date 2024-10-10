'use client';
import React from 'react';
import { useTranslations } from 'next-intl';

import { SelectColorType } from '@/features/shared/atoms/select/SelectForm';
import { SwitchComponent } from '@/features/shared/atoms/swich/switch';

import style from './switch-notification-settings.module.css';

const SwitchSettingNotification = () => {
  const t = useTranslations('Setting');

  return (
    <>
      <div className={style.notificationUpdate}>
        <p>{t('s_notificationSettings-labelSwitch')}</p>
        <SwitchComponent color={SelectColorType.SECONDARY} defaultSelected ariaLabel='Notification' />
      </div>
    </>
  );
};

export default SwitchSettingNotification;
