import React from "react";
import Navbar from "@/features/shared/organisms/Navbar";

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
              <Navbar/>
              {children}
          </main>
      </>
  );
};

export default Layout;
