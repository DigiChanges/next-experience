'use client';
import React from 'react';
import { NavbarTemplate } from '@/features/navbar/template/NavbarTemplate';
import style from './private-layout.module.css';
import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Props {
    children: React.ReactNode
}

export const PrivateLayout = (props: Props) => {
  const { children } = props;

  return (
    <>
      <NavbarTemplate/>
      <ToastContainer
        autoClose={3000}
        transition={Bounce}
        theme={'dark'}/>
      <div className={`${style.containerComponents}`}>
        {children}
      </div>
    </>
  );
};
