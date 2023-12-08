'use client';
import React from 'react';
import { NavbarTemplate } from '@/features/navbar/template/NavbarTemplate';
import style from './layout.module.css';
import { Providers } from '@/app/providers';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
interface LayoutProps
{
    children: React.ReactNode
}

const Layout = (props: LayoutProps) => {
  const { children } = props;

  return (
    <Providers>
      <main className="dark">
        <NavbarTemplate/>
        <div className={style.containerComponents}>
          {children}
        </div>
        <ToastContainer toastClassName={() => `${contextClass
        } relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer`
        }
        bodyClassName={() => 'text-sm font-white font-med block p-3'}
        autoClose={3000}/>
      </main>
    </Providers>

  );
};

export default Layout;
const contextClass: any = {
  success: style.bgAlert,
  error: style.bgAlert,
  pending: style.bgAlert

};

