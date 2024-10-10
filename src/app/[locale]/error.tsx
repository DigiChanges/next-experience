'use client';
import React from 'react';
import { useTranslations } from 'next-intl';

type Props = {
  readonly reset: () => void;
};
export default function ErrorHandler({ reset }: Props) {
  const t = useTranslations('Error');

  return (
    <div>
      <div>
        <h1>{t('title')}</h1>
      </div>
      <div>
        <h2>{t('description')}</h2>
        <button onClick={reset}>{t('retry')}</button>
      </div>
    </div>
  );
}
