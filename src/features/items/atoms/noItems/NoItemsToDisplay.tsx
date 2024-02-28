import React from 'react';
import { Show } from '@/features/shared/atoms/show/Show';
import { Item } from '@/features/items/interfaces/itemsResponse';
import style from './noItemsToDisplay.module.css';
import { useTranslations } from 'next-intl';

interface Props  {
    data: Item[];
}
export const NoItemsToDisplay = ({ data }: Props) => {
  const t = useTranslations('Items');

  return (
    <Show when={data.length === 0}>
      <div className={style.container}>
        <h2>{t('emptyItems')}</h2>
      </div>
    </Show>
  );
};
