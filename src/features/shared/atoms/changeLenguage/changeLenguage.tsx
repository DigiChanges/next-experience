import React from 'react';
import style from './changeLenguage.module.css';
import { locales } from '../../../../config';
import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { MdLanguage } from 'react-icons/md';


interface Props {
    isLangDropdownOpen: boolean,
    handleDropdownLang: () => void
}
export const ChangeLenguage: React.FC<Props> = (props) => {
  const { Link, usePathname } = createSharedPathnamesNavigation({ locales });
  const pathName = usePathname();

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
              locale={'es'}>Español</Link>
          </div>
          <div className={style.perfilSections}>
            <Link className={'ml-1 rounded p-1 text-white'} href={`${pathName}?${paramsString}`}
              locale={'en'}>Ingles</Link>
          </div>
        </div>
      </motion.ul>
    </div>
  );
};
