import React from 'react';
import { Image } from '@nextui-org/react';
import { useTranslations } from 'next-intl';

import { icons } from '@/features/shared/hooks/icons';

import style from './no-entities-to-display.module.css';

type Props<Type> = {
  data: Type[];
  section: string;
};

export const NoEntitiesToDisplay = <Type,>({ data, section }: Props<Type>) => {
  const t = useTranslations(section);
  const { IconNoItems } = icons();

  return (
    <>
      {data.length === 0 && (
        <div className={style.container}>
          <h2>{t('emptyItems')}</h2>
          <Image src={IconNoItems.src} width={100} height={100} alt={'No items'} />
        </div>
      )}
    </>
  );
};
