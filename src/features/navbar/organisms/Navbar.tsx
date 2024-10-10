'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { IoFileTrayFull, IoHomeOutline } from 'react-icons/io5';

import BurguerButton from '@/features/navbar/atom/BurguerButton';
import { dataNav } from '@/features/navbar/constants/dataNav';
import ThemeSwitcher from '@/features/shared/atoms/swich/ThemeSwitcher';
import { icons } from '@/features/shared/hooks/icons';

import style from './navbar.module.css';

export const Navbar = () => {
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
      <BurguerButton isOpenBurguer={isOpen} classStyleResponsive={style.navResponsive} handleNavbar={handleNavbar} />
      <header className={`${style.container} ${isOpen && style.navActive}`}>
        <nav>
          <div className={`${style.openMenu}`}>
            <Image className={style.logo} src={IconLogoDgc} alt={'logo dgc'} height={400} width={400} />
            <BurguerButton isOpenBurguer={isOpen} classStyle={style.rotateIcon} handleNavbar={handleNavbar} />
          </div>
          <ul>
            <span className={style.lineOne}></span>
            {dataNav.map(({ description, path, id }, index) => (
              <li key={id} className={index === selectedItemIndex ? style.selectedItem : ''}>
                <Link
                  onClick={(e) => {
                    if (!path) {
                      e.preventDefault();
                    }
                    handleItemClick(index);
                  }}
                  href={path ?? '#'}
                >
                  <div className={style.imgNav}>{id === 1 ? <IoHomeOutline /> : <IoFileTrayFull />}</div>
                  <p>{t(description)}</p>
                </Link>
              </li>
            ))}
          </ul>
          <span className={style.lineTwo}></span>
        </nav>
        <ThemeSwitcher />
      </header>
    </>
  );
};
