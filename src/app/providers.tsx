// app/providers.tsx
'use client';

import { NextUIProvider } from '@nextui-org/react';
import React from 'react';
import { Bounce, ToastContainer } from 'react-toastify';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import "../features/shared/atoms/toast/toast.css";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <NextThemesProvider
        attribute='class'
        defaultTheme='dark'>
        <main>
          <ToastContainer
            autoClose={3000}
            transition={Bounce}
            theme={'dark'}/>
          {children}
        </main>
      </NextThemesProvider>

    </NextUIProvider>
  );
}
