'use client';
import React from 'react';
import {NotFoundComponent} from "@/features/shared/organisms/notFound/notFound";
import style from "../features/shared/atoms/not-found/not-found.module.css"
import {Poppins} from "next/font/google";

const poppins = Poppins({
    subsets: ['latin'],
    style: 'normal',
    variable: '--font-poppins',
    weight: ['100', '400', '500', '700']
});
export default function NotFound() {
  return (
    <html lang="en">
      <body className={`${style.containerNotFound} ${poppins.variable}`}>
        <NotFoundComponent/>
      </body>
    </html>
  );
}
