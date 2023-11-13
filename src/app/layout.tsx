import type { Metadata } from 'next'
import {Poppins} from 'next/font/google'
import './globals.css'
import React from "react";
import {Providers} from "@/app/providers";

const poppins = Poppins({
  subsets: ['latin'],
  style: 'normal',
  variable: '--font-poppins',
  weight: ['100', '400', '500', '700']
});

export const metadata: Metadata = {
  title: 'Star Wars Web App',
  description: 'Simple Star Wars Web',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
