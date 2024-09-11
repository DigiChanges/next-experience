import React from 'react';
import { Show } from '@/features/shared/atoms/show/Show';
import { Item } from '@/features/items/interfaces/itemsResponse';
import style from './noItemsToDisplay.module.css';
import { useTranslations } from 'next-intl';
import { icons } from '@/features/shared/hooks/icons';
import { Image } from '@nextui-org/react';

interface Props  {
    data: Item[];
}
export const NoItemsToDisplay = ({ data }: Props) => {
  const t = useTranslations('Items');
  const { IconNoItems } = icons();

  return (
    <Show when={data.length === 0}>
      <div className={style.container}>
        <h2>{t('emptyItems')}</h2>
        <Image src={IconNoItems.src} width={100} height={100} alt={'No items'}/>
      </div>
    </Show>
  );
};
