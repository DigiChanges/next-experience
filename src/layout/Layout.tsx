'use client';
import React from 'react';
import { NavbarTemplate } from '@/features/navbar/template/NavbarTemplate';
import style from './layout.module.css';
import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


interface LayoutProps {
    children: React.ReactNode
}

const Layout = (props: LayoutProps) => {
  const { children } = props;

  return (
    <>
      <ToastContainer
        autoClose={3000}
        transition={Bounce}
        theme={'dark'}/>
      <NavbarTemplate/>
      <div className={`${style.containerComponents}`}>
        {children}
      </div>
    </>
  );
};


export default Layout;
