import React from 'react';
import { Show } from '@/features/shared/atoms/show/Show';
import { Item } from '@/features/items/interfaces/itemsResponse';
import style from './noItemsToDisplay.module.css';

interface Props  {
    data: Item[];
}
export const NoItemsToDisplay = ({ data }: Props) => {
  return (
    <Show when={data.length === 0}>
      <div className={style.container}>
        <h2>No items to display</h2>
      </div>
    </Show>
  );
};
