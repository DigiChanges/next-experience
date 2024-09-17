'use client';
import React, { useState } from 'react';
import style from './navbarTop.module.css';
import { ChangeLanguage } from '@/features/shared/atoms/changeLanguage/changeLanguage';
import ThemeSwitcher from '@/features/shared/atoms/swich/ThemeSwitcher';
import { dataLogin, dataPerfil, dataUser } from '@/features/navbar/constants/dataNav';
import { DropdownUser } from '@/features/navbar/molecules/dropdown/DropdownUser';

type Props = {
    isPublic: boolean;
}

export const NavbarTop = (props: Props) => {
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState<boolean>(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState<boolean>(false);
  const handleDropdownUser = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
  };
  const handleDropdownLang = () => {
    setIsLangDropdownOpen(!isLangDropdownOpen);
  };

  return (
    <header className={style.container}>
      <nav>
        {props.isPublic ? (
          <>
            <ThemeSwitcher />
            <ChangeLanguage
              isLangDropdownOpen={isLangDropdownOpen}
              handleDropdownLang={handleDropdownLang}
            />
          </>
        ) :
          (
            <>
              <ChangeLanguage
                isLangDropdownOpen={isLangDropdownOpen}
                handleDropdownLang={handleDropdownLang}
              />
              <DropdownUser dataPerfil={dataPerfil}
                style={style} dataUser={dataUser}
                dataLogin={dataLogin}
                isUserDropdownOpen={isUserDropdownOpen}
                handleDropdownUser={handleDropdownUser}
              />
            </>
          )
        }
      </nav>
    </header>
  );
};
