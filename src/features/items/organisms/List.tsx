import React from 'react';
import { CardItem } from '@/features/items/atoms/card/CardItem';
import style from './list.module.css';
import { AddItemBtn } from '../atoms/addItem/AddItemBtn';
import { ItemsResponse } from '@/features/items/interfaces/itemsResponse';

interface IProps {
    items: ItemsResponse[]
}
export const List: React.FC<IProps> = ({ items }) => {
  return (
    <section>
      <AddItemBtn />
      <div className={style.cards}>
        {items.map((item) => (
          <CardItem key={item.id} name={item.name} type={item.type} id={item.id}/>
        ))}
      </div>
    </section>
  );
};
