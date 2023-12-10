// app/providers.tsx
'use client';

import { NextUIProvider } from '@nextui-org/react';
import React from 'react';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <main className="dark">
        {children}
      </main>

    </NextUIProvider>
  );
}
