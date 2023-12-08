'use client';
import React from 'react';
import { NavbarTemplate } from '@/features/navbar/template/NavbarTemplate';
import style from './layout.module.css';
import { Providers } from '@/app/providers';
import { ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
interface LayoutProps
{
    children: React.ReactNode
}

//
// const contextClass: any = {
//   success: style.bgAlert,
//   error: style.bgAlert,
//   pending: style.bgAlert
//
// };

const Layout = (props: LayoutProps) => {
  const { children } = props;

  return (
    <Providers>
      <main className="dark">
        <NavbarTemplate/>
        <div className={style.containerComponents}>
          {children}
        </div>
        <ToastContainer
          autoClose={3000}
          transition={Bounce}
          theme={'dark'}/>
      </main>
    </Providers>

  );
};


export default Layout;
