import React from 'react';
import { Item } from '@/features/items/interfaces/itemsResponse';
import style from './noItemsToDisplay.module.css';
import { useTranslations } from 'next-intl';
import { icons } from '@/features/shared/hooks/icons';
import { Image } from '@nextui-org/react';

type Props = {
    data: Item[];
}
export const NoItemsToDisplay = ({ data }: Props) => {
  const t = useTranslations('Items');
  const { IconNoItems } = icons();
  return (
    <>
      { data.length === 0 && <div className={style.container}>
        <h2>{t('emptyItems')}</h2>
        <Image src={IconNoItems.src} width={100} height={100} alt={'No items'}/>
      </div>
      }
    </>
  )
  ;
};
