'use client';
import React, { useState } from 'react';
import style from './navbarTop.module.css';
import { ChangeLenguage } from '@/features/shared/atoms/changeLenguage/changeLenguage';
import ThemeSwitcher from '@/features/shared/atoms/swich/swich';
import { dataLogin, dataPerfil, dataUser } from '@/features/navbar/constants/dataNav';
import { DropdownUser } from '@/features/navbar/molecules/dropdown/DropdownUser';

interface Props {
    isPublic: boolean;
}
export const NavbarTop: React.FC<Props> = (props) => {
  const [isUserDropdownOpen, setisUserDropdownOpen] = useState<boolean>(false);
  const [isLangDropdownOpen, setisLangDropdownOpen] = useState<boolean>(false);
  const handleDropdownUser = () => {
    setisUserDropdownOpen(!isUserDropdownOpen);
  };
  const handleDropdownLang = () => {
    setisLangDropdownOpen(!isLangDropdownOpen);
  };

  return (
    <header className={style.container}>
      <nav>
        {props.isPublic ? (
          <>
            <ThemeSwitcher />
            <ChangeLenguage
              isLangDropdownOpen={isLangDropdownOpen}
              handleDropdownLang={handleDropdownLang}
            />
          </>
        ) :
          (
            <>
              <ChangeLenguage
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
