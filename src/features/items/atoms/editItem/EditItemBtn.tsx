
import React from 'react';
import { Button, Image } from '@nextui-org/react';
import style from './editItem.module.css';
import { icons } from '@/features/shared/hooks/icons';
import Link from 'next/link';

interface IProps {
    id: string;
}

export const EditItemBtn: React.FC<IProps> = ({ id }) => {
  const { EditIcon } = icons();

  return (
    <>
      <Link href={`items/update?id=${id}`}>
        <Button isIconOnly className={style.btnEdit}>
          <Image src={EditIcon.src} width={100} height={100} alt={'edit'} />
        </Button>
      </Link>

    </>
  );
};
