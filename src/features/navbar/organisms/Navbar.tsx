'use client';
import React, { useEffect, useState } from 'react';
import style from './navbar.module.css';
import Image from 'next/image';
import { dataClose, dataLogin, dataNav, dataPerfil, dataUser } from '@/features/navbar/constants/dataNav';
import Link from 'next/link';
import { DropdownUser } from '@/features/navbar/molecules/dropdown/DropdownUser';
import { useTranslations } from 'next-intl';
import { ChangeLenguage } from '@/features/shared/atoms/changeLenguage';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);
  const [isUserDropdownOpen, setisUserDropdownOpen] = useState<boolean>(false);

  const t = useTranslations('Navigation');
  const handleNavbar = (): void => {
    setIsOpen(!isOpen);
    setSelectedItemIndex(null);
  };
  useEffect(() => {
    if (!isOpen){
      setisUserDropdownOpen(false);
    }
  }, [isOpen]);
  const handleItemClick = (index: number): void => {
    setSelectedItemIndex(index);
  };
  const handleDropdownUser = () => {
    if (isOpen) {
      setisUserDropdownOpen(!isUserDropdownOpen);
    }
  };
  return (
    <header className={`${style.container} ${isOpen && style.navActive}`}>
      <nav>
        <div className={`${style.openMenu}`}>
          <Image className={`${isOpen && style.rotateIcon}`} onClick={handleNavbar} src={dataClose.image} alt={'close'} height={200} width={200} />
        </div>
        <div>
          <DropdownUser dataPerfil={dataPerfil}
            style={style} dataUser={dataUser}
            dataLogin={dataLogin}
            isUserDropdownOpen={isUserDropdownOpen}
            handleDropdownUser={handleDropdownUser}
          />
        </div>
        <ul>
          <span className={style.lineOne}></span>{
            dataNav.map(({ image, description, path }, index) =>
              <li key={t(description)} className={index === selectedItemIndex ? style.selectedItem : ''}>
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
      <ChangeLenguage/>
    </header>
  );
};


