'use client';
import React from 'react';
import style from './menu-setting.module.css';
import Link from 'next/link';
import { SettingUpdatePassword } from '@/features/setting/molecules/settingUpdatePassword/settingUpdatePassword';
import { useTranslations } from 'next-intl';
import { SettingNotification } from '@/features/setting/molecules/settingNotification/settingNotification';
import { ModalComponent } from '@/features/shared/atoms/modal/Modal';
import { useDisclosure } from '@nextui-org/react';
import { icons } from '@/features/shared/hooks/icons';


export const MenuSetting = () => {
  const t = useTranslations('Setting');
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { IoChevronForward, GiPadlock, RiUserUnfollowLine, FaRegBell, IoChevronBack } = icons();

  return (
    <div className={style.container}>
      <div className={style.containerUrl}>
        <p>{t('home')}</p><span>›</span><Link href={'/dashboard'}>{t('Dashboard')}</Link><span>›</span><p className={style.urlActive}>{t('Setting')}</p>
      </div>
      <div className={style.containerSetting}>
        <h1 data-aos="fade-down" data-aos-duration="1500">
          {t('title')}
        </h1>
        <h2>{t('description')}</h2>
        <div className={style.containerList}>
          <div className={style.tab}>
            <input className={style.inputCheck} type="radio" name="tabs" id="t1"/>
            <label className={style.labelCheck} htmlFor="t1"><GiPadlock/> {t('s_changePassword')} <IoChevronForward className={style.arrowRight}/></label>
            <div className={style.divRight}>
              <input className={style.inputCheckResponsive} type="radio" name="tabs" id="t1b"/>
              <label className={style.labelCheckResponsive} htmlFor="t1b"><IoChevronBack/> {t('Setting')}</label>
              <h3>{t('s_changePasswordTitle')}</h3>
              <SettingUpdatePassword/>
            </div>
          </div>
          <div className={style.tab}>
            <input className={style.inputCheck} type="radio" name="tabs" id="t2"/>
            <label className={style.labelCheck} htmlFor="t2"><RiUserUnfollowLine/> {t('s_deleteAccount')} <IoChevronForward className={style.arrowRight}/></label>
            <div className={style.divRight}>
              <input className={style.inputCheckResponsive} type="radio" name="tabs" id="t2b"/>
              <label className={style.labelCheckResponsive} htmlFor="t2b"><IoChevronBack/> {t('Setting')}</label>
              <h3>{t('s_deleteAccount-title')}</h3>
              <ModalComponent
                displayButton={true}
                isOpen={isOpen}
                onOpen={onOpen}
                onOpenChange={onOpenChange}
                description={t('s_deleteAccount-modal')}
                success={t('s_deleteAccount-accept')}
                cancel={t('s_deleteAccount-cancel')}
                button={t('s_deleteAccount-confirm')}
              />
            </div>
          </div>
          <div className={style.tab}>
            <input className={style.inputCheck} type="radio" name="tabs" id="t3"/>
            <label className={style.labelCheck} htmlFor="t3"><FaRegBell/> {t('s_notificationSettings')} <IoChevronForward className={style.arrowRight}/></label>
            <div className={style.divRight}>
              <input className={style.inputCheckResponsive} type="radio" name="tabs" id="t3b"/>
              <label className={style.labelCheckResponsive} htmlFor="t3b"><IoChevronBack/> {t('Setting')}</label>
              <h3>{t('s_notificationSettings-title')}</h3>
              <SettingNotification/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
