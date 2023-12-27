'use client';
import React from 'react';
import 'react-toastify/dist/ReactToastify.css';

interface Props {
    children: React.ReactNode
}

export const PublicLayout = (props: Props) => {
  const { children } = props;

  return (
      <div>
          {children}
      </div>
  );
};
