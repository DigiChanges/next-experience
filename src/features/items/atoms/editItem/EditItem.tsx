'use client';
import React, { useState } from 'react';
import { Button, Image } from '@nextui-org/react';
import style from './editItem.module.css';
import { icons } from '@/features/shared/hooks/icons';
import { useOpen } from '@/features/shared/hooks/useOpen';
import { getOne } from '@/features/items/actions/ItemAction';
import { ModalUpdate } from '@/features/items/organisms/ModalUpdate';
import { ItemPayload, ItemsResponse } from '@/features/items/interfaces/itemsResponse';

interface IProps {
    id: string;
}

export const EditItem: React.FC<IProps> = ({ id }) => {
  const [item, setItem] = useState<ItemsResponse>();
  const { isOpen, handleIsOpen } = useOpen();

  const { EditIcon } = icons();
  const handleUpdate = async(data: ItemPayload) => {
    const test = data;
    // await updateItem({ id: data.id, data});
    handleIsOpen();
    return test;
  };

  const handleGetOne = async(id: string) => {
    const item = await getOne({ id });
    setItem(item);
    handleIsOpen();
  };
  return (
    <>
      <div>
        <Button isIconOnly className={style.btnEdit} onClick={() => handleGetOne(id)}>
          <Image src={EditIcon.src} width={100} height={100} alt={'edit'} />
        </Button>
        {
          (isOpen && item) &&  <ModalUpdate
            item={item}
            handleModal={handleIsOpen}
            handleUpdateAction={handleUpdate}/>
        }

      </div>

    </>
  );
};
