'use client';
import React, { useState } from 'react';
import style from './navbar.module.css';
import Image from 'next/image';
import { dataClose, dataNav } from '@/features/navbar/constants/dataNav';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import ThemeSwitcher from '@/features/shared/atoms/swich/swich';

// Esto lo tengo que traer de dataClose?
import {RxCross2} from "react-icons/rx";
import {LuMenuSquare} from "react-icons/lu";
import {AiOutlineHome} from "react-icons/ai";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);
  const t = useTranslations('Navigation');
  const handleNavbar = (): void => {
    setIsOpen(!isOpen);
    setSelectedItemIndex(null);
  };
  const handleItemClick = (index: number): void => {
    setSelectedItemIndex(index);
  };

  return (
    <header className={`${style.container} ${isOpen && style.navActive}`}>
      <nav>
        <div className={`${style.openMenu}`}>
          {/* <Image className={`${isOpen && style.rotateIcon}`} onClick={handleNavbar} src={dataClose.image} alt={'close'}
                  height={200} width={200}/> */}
          <RxCross2 className={`${isOpen && style.rotateIcon}`} onClick={handleNavbar} height={200} width={200} />
        </div>
        <ul>
          <span className={style.lineOne}></span>{
            dataNav.map(({ image, description, path, id }, index) =>
              <li key={id} className={index === selectedItemIndex ? style.selectedItem : ''}>
                <Link onClick={(e) => {
                  !path && e.preventDefault();
                  handleItemClick(index);
                }} href={path ?? '#'}>
                  <div className={style.imgNav}>
                    <Image src={image} alt={'menu item'}/>
                  </div>
                  <p>{t(description)}</p>
                </Link>
              </li>)}
        </ul>
        <span className={style.lineTwo}></span>
      </nav>
      <ThemeSwitcher />
    </header>
  );
};


