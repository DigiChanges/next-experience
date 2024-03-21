'use client';
import React from "react";
import "./menuSetting.css";
import style from "./settingNotification.module.css";
import {Switch} from "@nextui-org/react";
import {useTranslations} from "next-intl";
import {ModalComponent} from "@/features/shared/atoms/modal/Modal";

export const SettingNotification: React.FC = () =>{
    const t = useTranslations('Setting');

    return(
        <>
            <div className={style.notificationUpdate}>
                <p>{t('tab3switch')}</p>
                <Switch color={'secondary'} defaultSelected aria-label="Notification"/>
            </div>
            <div className={style.notificationUpdate}>
                <p>{t('tab3switch')}</p>
                <Switch color={'secondary'} defaultSelected aria-label="Notification"/>
            </div>
            <div className={style.notificationUpdate}>
                <p>{t('tab3switch')}</p>
                <Switch color={'secondary'} defaultSelected aria-label="Notification"/>
            </div>
            <div className={style.notificationUpdate}>
                <p>{t('tab3switch')}</p>
                <Switch color={'secondary'} defaultSelected aria-label="Notification"/>
            </div>
            <ModalComponent description={t('tab3modal')} success={t('tab3modalsuccess')} cancel={t('tab3modalcancel')} button={t('tab3button')} />
        </>
    )
}
