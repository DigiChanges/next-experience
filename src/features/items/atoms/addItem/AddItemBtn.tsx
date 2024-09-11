'use client';
import React from 'react';
import { Button } from '@nextui-org/react';
import style from './addItem.module.css';
import { icons } from '@/features/shared/hooks/icons';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export const AddItemBtn: React.FC = () => {
  const { IoAddOutline } = icons();
  const t = useTranslations('Items');

  return (
    <div className={style.container} >
      <Link href={'items/create'}>
        <Button
          aria-label='Like'
        >
          <IoAddOutline />
          {t('addItem')}
        </Button>
      </Link>
    </div>
  );
};
