
import React from 'react';
import { NavbarTemplate } from '@/features/navbar/template/NavbarTemplate';
import style from './private-layout.module.css';
import 'react-toastify/dist/ReactToastify.css';



interface Props {
    children: React.ReactNode
}

export const PrivateLayout = (props: Props) => {
  const { children } = props;


  return (
    <>
      <NavbarTemplate/>
      <div className={`${style.containerComponents}`}>
        {children}
      </div>
    </>
  );
};
