import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { MdLanguage } from 'react-icons/md';

import { locales } from '@/config';

import { icons } from '../../hooks/icons';

import style from './change-language.module.css';

type Props = {
  isLangDropdownOpen: boolean;
  handleDropdownLang: () => void;
};
export const ChangeLanguage = (props: Props) => {
  const { Link, usePathname } = createSharedPathnamesNavigation({ locales });
  const pathName = usePathname();
  const { IconFlagUsa, IconFlagSpain } = icons();

  const params = useSearchParams();
  const paramsString = new URLSearchParams(Array.from(params.entries())).toString();

  return (
    <div className={style.container}>
      <div className={style.containerIconUser}>
        <button onClick={props.handleDropdownLang} className={`${style.iconUser}`}>
          <MdLanguage />
        </button>
      </div>
      <motion.ul
        initial={{ height: 0 }}
        animate={{ height: props.isLangDropdownOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
        className={`${style.containerPerfil} ${props.isLangDropdownOpen && style.shadow}`}
      >
        <div className={style.perfil}>
          <div className={style.perfilSections}>
            <Link className={'ml-1 rounded p-1 text-white'} href={`${pathName}?${paramsString}`} locale={'es'}>
              Español <Image src={IconFlagSpain} alt='flag spain' />
            </Link>
          </div>
          <div className={style.perfilSections}>
            <Link className={'ml-1 rounded p-1 text-white'} href={`${pathName}?${paramsString}`} locale={'en'}>
              Ingles <Image src={IconFlagUsa} alt='flag usa' />
            </Link>
          </div>
        </div>
      </motion.ul>
    </div>
  );
};
