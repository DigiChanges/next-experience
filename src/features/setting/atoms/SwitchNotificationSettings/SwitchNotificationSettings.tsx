'use client';
import React from 'react';
import { Switch } from '@nextui-org/react';
import {useTranslations} from "next-intl";
import style from "./SwitchNotificationSettings.module.css";

const SwitchSettingNotification: React.FC = () =>{
    const t = useTranslations('Setting');

    return (
        <>
            <div className={style.notificationUpdate}>
                <p>{t('s_notificationSettings-labelSwitch')}</p>
                <Switch color={'secondary'} defaultSelected aria-label="Notification"/>
            </div>
        </>
    );
}

export default SwitchSettingNotification;
