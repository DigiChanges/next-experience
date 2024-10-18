'use client';
import React, { useEffect, useState } from 'react';

import { dataLogin, dataPerfil, dataUser } from '@/features/navbar/constants/dataNav';
import { DropdownUser } from '@/features/navbar/molecules/dropdown/DropdownUser';
import { ChangeLanguage } from '@/features/shared/atoms/changeLanguage/changeLanguage';
import ThemeSwitcher from '@/features/shared/atoms/swich/ThemeSwitcher';

import style from './navbar-top.module.css';
import { useContextUser } from '@/contexts/UserContext';

export interface User {
  phone: string | null;
  email: string | null;
  last_name: string | null;
  first_name: string | null;
  id: string;
  image_id: string | null;
}

type Props = {
  isPublic: boolean;
  user?: User;
};

export const NavbarTop = (props: Props) => {
  const { avatar, handleSetAvatar } = useContextUser();
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState<boolean>(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState<boolean>(false);
  const handleDropdownUser = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
    setIsLangDropdownOpen(false);
  };
  const handleDropdownLang = () => {
    setIsLangDropdownOpen(!isLangDropdownOpen);
    setIsUserDropdownOpen(false);
  };
  const handleSetAvatarUser = () => {
    if(props.user?.image_id) {
      handleSetAvatar(props.user.image_id);
    }
  }

  useEffect(() => {
    handleSetAvatarUser();
  }, []);

  return (
    <header className={style.container}>
      <nav>
        {props.isPublic ? (
          <>
            <ThemeSwitcher />
            <ChangeLanguage isLangDropdownOpen={isLangDropdownOpen} handleDropdownLang={handleDropdownLang} />
          </>
        ) : (
          <>
            <ChangeLanguage isLangDropdownOpen={isLangDropdownOpen} handleDropdownLang={handleDropdownLang} />
            <DropdownUser
              avatar={avatar}
              dataPerfil={dataPerfil}
              style={style}
              dataUser={dataUser}
              dataLogin={dataLogin}
              user={props.user}
              isUserDropdownOpen={isUserDropdownOpen}
              handleDropdownUser={handleDropdownUser}
            />
          </>
        )}
      </nav>
    </header>
  );
};
