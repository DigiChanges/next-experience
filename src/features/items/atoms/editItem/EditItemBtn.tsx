import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { ButtonForm } from '@/features/shared/atoms/button/ButtonForm';
import { icons } from '@/features/shared/hooks/icons';

import style from './edit-item.module.css';

type Props = {
  id: string;
};

export const EditItemBtn = ({ id }: Props) => {
  const { IoMdCreate } = icons();
  const t = useTranslations('Items');

  return (
    <Link href={`items/update?id=${id}`}>
      <ButtonForm isIconOnly className={style.btnEdit}>
        <p>{t('edit')}</p>
        <IoMdCreate />
      </ButtonForm>
    </Link>
  );
};
