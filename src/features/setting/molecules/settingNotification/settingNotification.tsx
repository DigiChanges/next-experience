'use client';
import React from 'react';

import './menu-setting.css';
import { useDisclosure } from '@nextui-org/react';
import { useTranslations } from 'next-intl';

import SwitchSettingNotification from '@/features/setting/atoms/SwitchNotificationSettings/SwitchNotificationSettings';
import { ModalComponent } from '@/features/shared/atoms/modal/Modal';

export const SettingNotification = () => {
  const t = useTranslations('Setting');
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <SwitchSettingNotification />
      <ModalComponent
        displayButton={true}
        isOpen={isOpen}
        onOpen={onOpen}
        onOpenChange={onOpenChange}
        description={t('s_notificationSettings-modal')}
        success={t('s_notificationSettings-continue')}
        cancel={t('s_notificationSettings-cancel')}
        button={t('s_notificationSettings-button')}
      />
    </>
  );
};
