'use client';
import React from 'react';
import style from './menuSetting.module.css';
import Link from 'next/link';
import { SettingUpdatePassword } from '@/features/setting/molecules/settingUpdatePassword/settingUpdatePassword';
import { GiPadlock } from 'react-icons/gi';
import { RiUserUnfollowLine } from 'react-icons/ri';
import { FaRegBell } from 'react-icons/fa';
import { useTranslations } from 'next-intl';
import { SettingNotification } from '@/features/setting/molecules/settingNotification/settingNotification';
import { ModalComponent } from '@/features/shared/atoms/modal/Modal';

export const MenuSetting: React.FC = () => {
  const t = useTranslations('Setting');

  return (
    <div className={style.container}>
      <div className={style.containerUrl}>
        <p>{t('home')}</p><span>›</span><Link href={'/dashboard'}>{t('Dashboard')}</Link><span>›</span><p>{t('Setting')}</p>
      </div>
      <div className={style.containerSetting}>
        <h1 data-aos="fade-down" data-aos-duration="1500">
          {t('title')}
        </h1>
        <h2>{t('description')}</h2>
        <div className={style.containerList}>
          <div className={style.tab}>
            <input className={style.inputCheck} type="radio" name="tabs" id="t1" defaultChecked={true}/>
            <label className={style.labelCheck} htmlFor="t1"><GiPadlock /> {t('tab1')}</label>
            <div className={style.divRight}>
              <h3>{t('tab1title')}</h3>
              <SettingUpdatePassword />
            </div>
          </div>
          <div className={style.tab}>
            <input className={style.inputCheck} type="radio" name="tabs" id="t2"/>
            <label className={style.labelCheck} htmlFor="t2"><RiUserUnfollowLine /> {t('tab2')}</label>
            <div className={style.divRight}>
              <h3>{t('tab2title')}</h3>
              <ModalComponent description={t('tab2modal')} success={t('tab2modalsuccess')} cancel={t('tab2modalcancel')} button={t('tab2button')} />
            </div>
          </div>
          <div className={style.tab}>
            <input className={style.inputCheck} type="radio" name="tabs" id="t3"/>
            <label className={style.labelCheck} htmlFor="t3"><FaRegBell /> {t('tab3')}</label>
            <div className={style.divRight}>
              <h3>{t('tab3title')}</h3>
              <SettingNotification />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
