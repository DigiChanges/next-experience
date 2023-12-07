'use client';
import React from 'react';
import { Button, Image } from '@nextui-org/react';
import style from './addItem.module.css';
import { icons } from '@/features/shared/hooks/icons';
import Link from 'next/link';


export const AddItemBtn: React.FC = () => {
  const { IconAdd } = icons();


  return (
      <div className={style.container} >
        <Link href={'items/create'}>
          <Button
            radius='full'
            isIconOnly color='success'
            aria-label='Like'
          >
            <Image src={IconAdd.src} width={100} height={100} alt={'add item'} className={style.btn}/>
          </Button>
        </Link>
      </div>
  );
};
