import React from 'react';
import { useTranslations } from 'next-intl';

import { icons } from '@/features/shared/hooks/icons';

type Props = {
  className: string;
};

export const SubTitle = ({ className }: Props) => {
  const { IoCreateOutline } = icons();
  const t = useTranslations('Add');

  return (
    <div className={className}>
      <IoCreateOutline />
      <h2>{t('titleUser')}</h2>
    </div>
  );
};
