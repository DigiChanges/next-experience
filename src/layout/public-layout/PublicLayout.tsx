'use client';
import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { NavbarTopTemplate } from '@/features/navbar/template/NavbarTopTemplate';

interface Props {
    children: React.ReactNode
}

export const PublicLayout = (props: Props) => {
  const { children } = props;

  return (
    <>
      <NavbarTopTemplate />
      {children}
    </>
  );
};
