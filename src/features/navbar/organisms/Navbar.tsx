'use client';
import React, { useState } from 'react';
import style from './navbar.module.css';
import Image from 'next/image';
import { dataNav } from '@/features/navbar/constants/dataNav';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import ThemeSwitcher from '@/features/shared/atoms/swich/swich';
import { icons } from '@/features/shared/hooks/icons';

import BurguerButton from "@/features/navbar/atom/BurguerButton";

import { RxCross2 } from 'react-icons/rx';
import { IoHomeOutline } from "react-icons/io5";
import { IoFileTrayFull } from "react-icons/io5";

import { LuMenuSquare } from 'react-icons/lu';
import { AiOutlineHome } from 'react-icons/ai';
import IconLogoDgc from '@/asset/icons/logo-dgc.svg';

import { IoHomeOutline } from 'react-icons/io5';
import { IoFileTrayFull } from 'react-icons/io5';


export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);
  const t = useTranslations('Navigation');
  const { IconLogoDgc } = icons();
  const handleNavbar = (): void => {
    setIsOpen(!isOpen);
    setSelectedItemIndex(null);
  };
  const handleItemClick = (index: number): void => {
    setSelectedItemIndex(index);
  };


  return (
    <>
      <BurguerButton isOpenBurguer={isOpen} classStyleResponsive={style.navResponsive}
        handleNavbar={handleNavbar}/>
      <header className={`${style.container} ${isOpen && style.navActive}`}>
        <nav>
          <div className={`${style.openMenu}`}>
            <Image className={style.logo} src={IconLogoDgc} alt={'logo dgc'}
              height={400} width={400}/>
            <BurguerButton isOpenBurguer={isOpen} classStyle={style.rotateIcon} handleNavbar={handleNavbar}/>
          </div>
          <ul>
            <span className={style.lineOne}></span>{
              dataNav.map(({ description, path, id }, index) =>
                <li key={id} className={index === selectedItemIndex ? style.selectedItem : ''}>
                  <Link onClick={(e) => {
                    !path && e.preventDefault();
                    handleItemClick(index);
                  }} href={path ?? '#'}>
                    <div className={style.imgNav}>
                      {id === 1 ? <IoHomeOutline/> : <IoFileTrayFull/>}
                    </div>
                    <p>{t(description)}</p>
                  </Link>
                </li>)}
          </ul>
          <span className={style.lineTwo}></span>
        </nav>
        <ThemeSwitcher/>
      </header>
    </>
  );
};


