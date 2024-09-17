import React from 'react';
import { ButtonForm } from '@/features/shared/atoms/button/ButtonForm';
import style from './addItem.module.css';
import { icons } from '@/features/shared/hooks/icons';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export const AddItemBtn = () => {
  const { IoAddOutline } = icons();
  const t = useTranslations('Items');

  return (
    <div className={style.container} >
      <Link href={'items/create'}>
        <ButtonForm
          ariaLabel='Like'
        >
          <IoAddOutline />
          {t('addItem')}
        </ButtonForm>
      </Link>
    </div>
  );
};
