'use client';
import React from 'react';
import style from './navbarTop.module.css';
import { ChangeLenguage } from '@/features/shared/atoms/changeLenguage';
import ThemeSwitcher from '@/features/shared/atoms/swich/swich';

export const NavbarTop: React.FC = () =>{

    return(
        <header className={style.container}>
            <nav>
                <ThemeSwitcher />
                <ChangeLenguage />
            </nav>
        </header>
    )
}
