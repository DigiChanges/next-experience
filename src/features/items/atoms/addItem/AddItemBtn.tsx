'use client';
import React from 'react';
import { Button, Image } from '@nextui-org/react';
import style from './addItem.module.css';
import { icons } from '@/features/shared/hooks/icons';
import Link from 'next/link';
import { IoAddOutline } from "react-icons/io5";


export const AddItemBtn: React.FC = () => {
  const { IconAdd } = icons();

  return (
    <div className={style.container} >
      <Link href={'items/create'}>
        <Button
          aria-label='Like'
        >
          <IoAddOutline />
            Add Item
        </Button>
      </Link>
    </div>
  );
};
