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
import { IoChevronBack } from 'react-icons/io5';
import { useDisclosure } from '@nextui-org/react';


export const MenuSetting: React.FC = () => {
  const t = useTranslations('Setting');
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

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
            <input className={style.inputCheck} type="radio" name="tabs" id="t1" />
            <label className={style.labelCheck} htmlFor="t1"><GiPadlock /> {t('tab1')}</label>
            <div className={style.divRight}>
              <input className={style.inputCheckResponsive} type="radio" name="tabs" id="t1b"/>
              <label className={style.labelCheckResponsive} htmlFor="t1b"><IoChevronBack/> Configuración</label>
              <h3>{t('tab1title')}</h3>
              <SettingUpdatePassword/>
            </div>
          </div>
          <div className={style.tab}>
            <input className={style.inputCheck} type="radio" name="tabs" id="t2"/>
            <label className={style.labelCheck} htmlFor="t2"><RiUserUnfollowLine /> {t('tab2')}</label>
            <div className={style.divRight}>
              <input className={style.inputCheckResponsive} type="radio" name="tabs" id="t2b"/>
              <label className={style.labelCheckResponsive} htmlFor="t2b"><IoChevronBack/> Configuración</label>
              <h3>{t('tab2title')}</h3>
              <ModalComponent
                displayButton={true}
                isOpen={isOpen}
                onOpen={onOpen}
                onOpenChange={onOpenChange}
                description={t('tab2modal')}
                success={t('tab2modalsuccess')}
                cancel={t('tab2modalcancel')}
                button={t('tab2button')}
              />
            </div>
          </div>
          <div className={style.tab}>
            <input className={style.inputCheck} type="radio" name="tabs" id="t3"/>
            <label className={style.labelCheck} htmlFor="t3"><FaRegBell /> {t('tab3')}</label>
            <div className={style.divRight}>
              <input className={style.inputCheckResponsive} type="radio" name="tabs" id="t3b"/>
              <label className={style.labelCheckResponsive} htmlFor="t3b"><IoChevronBack/> Configuración</label>
              <h3>{t('tab3title')}</h3>
              <SettingNotification/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
