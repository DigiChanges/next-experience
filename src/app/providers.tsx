// app/providers.tsx
'use client';

import React from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { Bounce, ToastContainer } from 'react-toastify';
import '../features/shared/atoms/toast/toast.css';
import { UserProvider } from '@/contexts/UserContext';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute='class' defaultTheme='dark'>
        <UserProvider>
          <main>
            <ToastContainer autoClose={3000} transition={Bounce} theme={'dark'} />
            {children}
          </main>
        </UserProvider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
