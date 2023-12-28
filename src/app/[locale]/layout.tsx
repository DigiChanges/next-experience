import { Poppins } from 'next/font/google';
import './globals.css';
import React, { ReactNode } from 'react';
import { Providers } from '@/app/providers';
import { locales } from '@/config';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { validateEnv } from '@/config/api';
import { NextIntlClientProvider, useMessages } from 'next-intl';

type Props = {
  readonly children: ReactNode;
  readonly params: {locale: string};
};

const poppins = Poppins({
  subsets: ['latin'],
  style: 'normal',
  variable: '--font-poppins',
  weight: ['100', '400', '500', '700']
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
export async function generateMetadata({
  params: { locale }
}: Omit<Props, 'children'>) {
  const t = await getTranslations({ locale, namespace: 'LocaleLayout' });
  return {
    title: t('title')
  };
}
export default function RootLayout({ children, params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  validateEnv();
  const messages = useMessages();
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>
            {children}
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
