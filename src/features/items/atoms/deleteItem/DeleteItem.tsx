'use client';
import React from 'react';
import { Button, Image } from '@nextui-org/react';
import style from './deleteItem.module.css';
import { icons } from '@/features/shared/hooks/icons';
import { Card, CardBody } from '@nextui-org/react';
import { useOpen } from '@/features/shared/hooks/useOpen';
import { deleteItem } from '@/features/items/actions/ItemAction';

interface IProps {
    id : string;
}

export const DeleteItem: React.FC<IProps> = (props) => {
  const handleDelete = async(id: string) => {
    await deleteItem(id);
    handleIsOpen();
  };
  const { DeleteIcon, IconAlert } = icons();
  const { isOpen, handleIsOpen } = useOpen();

  return (

    <div >
      <Button isIconOnly className={style.btnDelete} onClick={handleIsOpen}>
        <Image src={DeleteIcon.src} width={100} height={100} alt={'delete'} />
      </Button>
      {
        isOpen && <Card className={style.containerAlert}>
          <CardBody className={style.subContainer}>
            <Image className={style.img} src={IconAlert.src} alt="icon alert" />
            <p className={style.text}>Are you sure you want delete this item?</p>

            <button className={style.btnSuccess} onClick={() => handleDelete(props.id)} >
                                Accept
            </button>
            <button onClick={handleIsOpen} className={style.btnClose}>
                                Cancel
            </button>
          </CardBody>

        </Card>
      }
    </div>


  );
};
