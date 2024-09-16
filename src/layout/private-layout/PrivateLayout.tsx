
import React from 'react';
import { NavbarTemplate } from '@/features/navbar/template/NavbarTemplate';
import style from './private-layout.module.css';
import 'react-toastify/dist/ReactToastify.css';
import { NavbarTopTemplate } from '@/features/navbar/template/NavbarTopTemplate';


interface Props {
    children: React.ReactNode
}

export const PrivateLayout = (props: Props) => {
  const { children } = props;


  return (
    <>
      <NavbarTopTemplate isPublic={false} />
      <NavbarTemplate/>
      <div className={`${style.containerComponents}`}>
        {children}
      </div>
    </>
  );
};
