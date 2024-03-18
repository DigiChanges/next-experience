import React from 'react';
import { Card, CardFooter } from '@nextui-org/react';
import style from './card.module.css';
import { DeleteItemBtn } from '../deleteItem/DeleteItemBtn';
import { EditItemBtn } from '../editItem/EditItemBtn';

interface CardItemProps
{
    name: string;
    type: number;
    id: string;
}
export const  CardItem: React.FC<CardItemProps> = ({ type, name, id }) => {
  return (
    <Card className={style.container}
      radius="lg"
    >
      <div className={style.state}>
      </div>
      <div className="flex flex-col px-4">
        <p className="text-md">Type: {type}</p>
        <h2 className={style.name}>{name}</h2>
      </div>
      <CardFooter className={style.cardFooter}>
        <DeleteItemBtn
          id={id}/>
        <div>
          <EditItemBtn id={id} />
        </div>
      </CardFooter>
    </Card>
  );
};

