'use client';
import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import style from './dropdownUser.module.css';
import { handleSignOut } from '@/features/auth/shared/actions/singOutAction';
import { toast } from 'react-toastify';
import { useTranslations } from 'next-intl';
import { Accordion, AccordionItem } from '@nextui-org/react';
import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { locales } from '@/config';
import { icons } from '@/features/shared/hooks/icons';
import { useSearchParams } from 'next/navigation';
import { IoPersonOutline } from 'react-icons/io5';
import { IoSettingsOutline } from 'react-icons/io5';

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

  const { Link, usePathname } = createSharedPathnamesNavigation({ locales });
  const pathName = usePathname();
  const { IconFlagUsa, IconFlagSpain, MdLanguage, IoLogOut } = icons();
  const params = useSearchParams();
  const paramsString = new URLSearchParams(params).toString();

  const singOut  = async() => {
    await toast.promise(handleSignOut, {
      error: `${r('error')}`,
      success: `${r('success')}`,
      pending:`${r('pending')}`
    });
  };

  return (
    <div className={style.container}>
      <div className={style.containerIconUser}>
        <button onClick={props.handleDropdownUser} className={`${style.iconUser} ${background}`}>
          <Image src={props.dataUser.image} alt={'Icon user'} height={1920} width={1080}/>
          <Image className={`${style.dropdown} ${rotate}`} src={props.dataUser.icon} alt={'dropdown'}/>
        </button>
      </div>
      <motion.ul
        initial={{ height: 0 }}
        animate={{ height: props.isUserDropdownOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
        className={style.containerPerfil}
      >
        <div className={style.perfil}>
          <div className={style.containerIconUserOpen}>
            <Image className={style.iconUserOpen} src={props.dataUser.image} alt={'Icon user'} height={1920}
              width={1080}/>
            <p>{props.dataUser.username}</p>
          </div>
          {
            props.dataPerfil.map(({ description, path }) =>
              <Link href={path ?? '#'} key={t(description)} className={style.perfilSections}>
                {path === '/profile' ? <IoPersonOutline /> : <IoSettingsOutline />}
                <p>{t(description)}</p>
              </Link>
            )
          }
          <Accordion className={style.langResponsive}>
            <AccordionItem key="1" aria-label="Accordion 1" title={<div className={style.langResponsiveTitle}><MdLanguage />Idiomas</div>}>
              <div className={style.perfilSections}>
                <Link className={'ml-1 rounded p-1 text-white'} href={`${pathName}?${paramsString}`}
                  locale={'es'}>Español <Image src={IconFlagSpain} alt="flag spain"/></Link>
              </div>
              <div className={style.perfilSections}>
                <Link className={'ml-1 rounded p-1 text-white'} href={`${pathName}?${paramsString}`}
                  locale={'en'}>Ingles <Image src={IconFlagUsa} alt="flag usa"/></Link>
              </div>
            </AccordionItem>
          </Accordion>
          <button className={style.logOut} onClick={singOut}>
            <IoLogOut/>
            <p>{t('logout')}</p>
          </button>
        </div>
      </motion.ul>
    </div>

  );
};

