import React from 'react';
import style from './change-language.module.css';
import { locales } from '@/config';
import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { MdLanguage } from 'react-icons/md';
import { icons } from '../../hooks/icons';
import Image from 'next/image';

type Props = {
    isLangDropdownOpen: boolean,
    handleDropdownLang: () => void
}
export const ChangeLanguage = (props: Props) => {
  const { Link, usePathname } = createSharedPathnamesNavigation({ locales });
  const pathName = usePathname();
  const { IconFlagUsa, IconFlagSpain } = icons();

  const params = useSearchParams();
  const paramsString = new URLSearchParams(params).toString();

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
        className={style.containerPerfil}
      >
        <div className={style.perfil}>
          <div className={style.perfilSections}>
            <Link className={'ml-1 rounded p-1 text-white'} href={`${pathName}?${paramsString}`}
              locale={'es'}>Español <Image src={IconFlagSpain} alt="flag spain"/></Link>
          </div>
          <div className={style.perfilSections}>
            <Link className={'ml-1 rounded p-1 text-white'} href={`${pathName}?${paramsString}`}
              locale={'en'}>Ingles <Image src={IconFlagUsa} alt="flag usa"/></Link>
          </div>
        </div>
      </motion.ul>
    </div>
  );
};
