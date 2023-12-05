import { IItemApiResponse } from '@/features/items/models';
import React from 'react';
import { CardItem } from '@/features/items/atoms/card/CardItem';
import style from './list.module.css';
import { AddItem } from '../atoms/addItem/AddItem';
import { getItems } from '@/features/items/actions/ItemAction';


export const List: () => Promise<React.JSX.Element>  = async() => {
  const { data } = await getItems();

  return (
    <section>
      <AddItem />

      <div className={style.cards}>
        {data.map((item: IItemApiResponse) => (
          <CardItem key={item.id} name={item.name} type={item.type} id={item.id}/>
        ))}
      </div>
    </section>
  );
};
