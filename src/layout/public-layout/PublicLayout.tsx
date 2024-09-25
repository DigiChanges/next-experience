import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { NavbarTopTemplate } from '@/features/navbar/template/NavbarTopTemplate';
import style from './public-layout.module.css';

type Props = {
    children: React.ReactNode
}

export const PublicLayout = (props: Props) => {
  const { children } = props;

  return (
    <>
      <NavbarTopTemplate isPublic={true} />
      <div className={`${style.containerComponents}`}>
        {children}
      </div>
    </>
  );
};
