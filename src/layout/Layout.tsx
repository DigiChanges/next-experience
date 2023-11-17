import React from "react";
import {NavbarTemplate} from "@/features/navbar/template/NavbarTemplate";
import style from './layout.module.css';
interface LayoutProps
{
    children: React.ReactNode,
    className: string
}

const Layout = (props: LayoutProps) =>
{
  const { children, className } = props;

  return (
      <>
          <main className={className}>
              <NavbarTemplate/>
              <div className={style.containerComponents}>
                  {children}
              </div>
          </main>
      </>
  );
};

export default Layout;
