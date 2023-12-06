'use client';
import React from 'react';
import { Button, Image } from '@nextui-org/react';
import style from './editItem.module.css';
import { icons } from '@/features/shared/hooks/icons';
import { getOne } from '@/features/items/actions/ItemAction';

interface IProps {
    id: string;
}

export const EditItem: React.FC<IProps> = ({ id }) => {
  // const [item, setItem] = useState<ItemsResponse>();
  // const { isOpen, handleIsOpen } = useOpen();

  const { EditIcon } = icons();
  // const handleUpdate = async(data: ItemPayload) => {
  //   const test = data;
  //   // await updateItem({ id: data.id, data});
  //   handleIsOpen();
  //   return test;
  // };

  const handleGetOne = async(id: string) => {
    // const item = await getOne({ id });
    // setItem(item);
    // handleIsOpen();
  };
  return (
    <>
      <div>
        <Button isIconOnly className={style.btnEdit} onClick={() => handleGetOne(id)}>
          <Image src={EditIcon.src} width={100} height={100} alt={'edit'} />
        </Button>
      </div>

    </>
  );
};
