'use client';
import React from 'react';
import { Button, Card, Image, CardBody } from '@nextui-org/react';
import style from './deleteItem.module.css';
import { icons } from '@/features/shared/hooks/icons';
import { useOpen } from '@/features/shared/hooks/useOpen';
import { deleteItem } from '@/features/items/actions/ItemAction';
import { toast } from 'react-toastify';

interface Props {
    id: string;
}

export const DeleteItemBtn: React.FC<Props> = (props) => {
  const { isOpen, handleIsOpen } = useOpen();
  const { DeleteIcon, IconAlert } = icons();
  const handleDelete = async(id: string) => {
    await  toast.promise(deleteItem({ id }), {
      error: 'Oops, something went wrong',
      success: 'The item was deleted correctly',
      pending:'Deleting item...'
    });
    handleIsOpen();
  };

  return (

    <div>
      <Button isIconOnly className={style.btnDelete} onClick={handleIsOpen}>
        <Image src={DeleteIcon.src} width={100} height={100} alt={'delete'}/>
      </Button>
      {
        isOpen && <Card className={style.containerAlert}>
          <CardBody className={style.subContainer}>
            <Image className={style.img} src={IconAlert.src} alt="icon alert"/>
            <p className={style.text}>Are you sure you want delete this item?</p>

            <button className={style.btnSuccess} onClick={() => handleDelete(props.id)}>
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
