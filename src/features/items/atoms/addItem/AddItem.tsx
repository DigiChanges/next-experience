'use client';
import React from 'react';
import { Button, Image } from '@nextui-org/react';
import style from './addItem.module.css';
import { icons } from '@/features/shared/hooks/icons';
import { useOpen } from '@/features/shared/hooks/useOpen';
import { createItem } from '@/features/items/actions/ItemAction';
import { Item } from '@/features/items/interfaces/itemsResponse';
import { ModalCreate } from '@/features/items/organisms/ModalCreate';


export const AddItem: React.FC = () => {
  const { isOpen, handleIsOpen } = useOpen();
  const { IconAdd } = icons();

  const handleAddItem = async(data : Item) => {
    await createItem(
      {
        data: { ...data, type: +data.type }
      }
    );
    handleIsOpen();
  };

  return (
    <>
      <div className={style.container} >
        <Button
          radius='full'
          isIconOnly color='success'
          aria-label='Like'
          onClick={handleIsOpen} >
          <Image src={IconAdd.src} width={100} height={100} alt={'add item'} className={style.btn}/>
        </Button>
      </div>
      {
        isOpen && <ModalCreate handleCreateAction={handleAddItem} handleModal={handleIsOpen}/>
      }
    </>
  );
};
