import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { ButtonForm } from '@/features/shared/atoms/button/ButtonForm';
import { icons } from '@/features/shared/hooks/icons';

import style from './add-item.module.css';

export const AddItemBtn = () => {
  const { IoAddOutline } = icons();
  const t = useTranslations('Items');

  return (
    <div className={style.container}>
      <Link href={'items/create'}>
        <ButtonForm ariaLabel='Like'>
          <IoAddOutline />
          {t('addItem')}
        </ButtonForm>
      </Link>
    </div>
  );
};
