'use client';
import React, { useEffect, useState } from 'react';

import { useContextUser } from '@/contexts/UserContext';
import { dataLogin, dataPerfil, dataUser } from '@/features/navbar/constants/dataNav';
import { DropdownUser } from '@/features/navbar/molecules/dropdown/DropdownUser';
import { ChangeLanguage } from '@/features/shared/atoms/changeLanguage/changeLanguage';
import ThemeSwitcher from '@/features/shared/atoms/swich/ThemeSwitcher';

import { UserHasRole } from '@/features/shared/interfaces/UserHasRole';

import style from './navbar-top.module.css';

type Props = {
  isPublic: boolean;
  user?: UserHasRole;
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
    if (props.user?.user_id.image_id) {
      handleSetAvatar(props.user.user_id.image_id);
    }
  };

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
