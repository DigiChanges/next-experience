import React from 'react';
import { CardItem } from '@/features/items/atoms/card/CardItem';
import style from './list.module.css';
import { AddItem } from '../atoms/addItem/AddItem';
import { ItemsResponse } from '@/features/items/interfaces/itemsResponse';

interface IProps {
    items: ItemsResponse[]
}
export function List({ items }: IProps) {
  return (
    <section>
      <AddItem />
      <div className={style.cards}>
        {items.map((item) => (
          <CardItem key={item.id} name={item.name} type={item.type} id={item.id}/>
        ))}
      </div>
    </section>
  );
}
