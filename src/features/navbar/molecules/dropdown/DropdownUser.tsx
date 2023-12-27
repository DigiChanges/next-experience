'use client';
import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import style from './dropdownUser.module.css';
import { handleSignOut } from '@/features/auth/shared/actions/singOutAction';
import { toast } from 'react-toastify';
import { useTranslations } from 'next-intl';

interface Props {
    dataPerfil: {
        icon: StaticImageData;
        description: string;
        path: string;
    }[],
    style: {
        readonly [key: string]: string;
    },
    dataUser: {
        image: StaticImageData,
        username: string,
        icon: StaticImageData
    },
    dataLogin: {
        icon: StaticImageData
    }
    isUserDropdownOpen: boolean,
    handleDropdownUser: () => void
}

export const DropdownUser: React.FC<Props> = (props) => {
  const background = props.isUserDropdownOpen ? 'animation' : '';
  const rotate = props.isUserDropdownOpen ? style.rotate : '';
  const t = useTranslations('NavigationUser');
  const r = useTranslations('ToastLogOut');

  const singOut  = async() => {
    await toast.promise(handleSignOut, {
      error: `${r('error')}`,
      success: `${r('success')}`,
      pending:`${r('pending')}`
    });
  };

  return (
    <div>
      <div className={style.containerIconUser}>
        <button onClick={props.handleDropdownUser} className={`${style.iconUser} ${background}`}>
          <Image src={props.dataUser.image} alt={'Icon user'} height={1920} width={1080}/>
          <p>{props.dataUser.username}</p>
          <Image className={`${style.dropdown} ${rotate}`} src={props.dataUser.icon} alt={'dropdown'}/>

        </button>
      </div>
      <motion.ul
        initial={{ height: 0 }}
        animate={{ height: props.isUserDropdownOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
        style={{ overflow: 'hidden' }}
      >
        <div className={style.perfil}>
          {
            props.dataPerfil.map(({ icon, description }) =>
              <div key={t(description)} className={style.perfilSections}>
                {icon && <Image src={icon} alt='icon perfil'/>}
                <p>{t(description)}</p>
              </div>
            )

          }
          <button className={style.logOut} onClick={singOut}>
            <Image src={props.dataLogin.icon} alt='LogOut'/>
          </button>
        </div>
      </motion.ul>
    </div>

  );
};

