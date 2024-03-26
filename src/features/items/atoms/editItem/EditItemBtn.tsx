
import React from 'react';
import { Button } from '@nextui-org/react';
import style from './editItem.module.css';
import { icons } from '@/features/shared/hooks/icons';
import Link from 'next/link';
import {useTranslations} from "next-intl";

interface Props {
    id: string;
}

export const EditItemBtn: React.FC<Props> = ({ id }) => {
  const { IoMdCreate } = icons();
    const t = useTranslations('Items');

  return (
    <Link href={`items/update?id=${id}`}>
        <Button isIconOnly className={style.btnEdit}>
            <p>{t('edit')}</p>
            <IoMdCreate />
        </Button>
    </Link>
  );
};
