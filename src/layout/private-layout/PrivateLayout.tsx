import React from 'react';

import { NavbarTemplate } from '@/features/navbar/template/NavbarTemplate';
import { NavbarTopTemplate } from '@/features/navbar/template/NavbarTopTemplate';

import style from './private-layout.module.css';
import 'react-toastify/dist/ReactToastify.css';

type Props = {
  children: React.ReactNode;
};

export const PrivateLayout = (props: Props) => {
  const { children } = props;

  return (
    <>
      <NavbarTopTemplate isPublic={false} />
      <NavbarTemplate />
      <div className={`${style.containerComponents}`}>{children}</div>
    </>
  );
};
