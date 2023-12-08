import React from 'react';
import { NavbarTemplate } from '@/features/navbar/template/NavbarTemplate';
import style from './layout.module.css';
import { Providers } from '@/app/providers';

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
      </main>
    </Providers>

  );
};

export default Layout;
