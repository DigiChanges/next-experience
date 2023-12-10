// app/providers.tsx
'use client';

import { NextUIProvider } from '@nextui-org/react';
import React from 'react';
import { Bounce, ToastContainer } from 'react-toastify';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <main className="dark">
        <ToastContainer
          autoClose={3000}
          transition={Bounce}
          theme={'dark'}/>
        {children}
      </main>
    </NextUIProvider>
  );
}
