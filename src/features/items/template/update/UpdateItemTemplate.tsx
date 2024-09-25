import React from 'react';
import style from './update-item.module.css';
import { getOne } from '@/features/items/actions/ItemAction';
import { icons } from '@/features/shared/hooks/icons';
import { FormUpdate } from '@/features/items/organisms/formUpdate/FormUpdate';
import { getTranslations } from 'next-intl/server';
type Props = {
    id: string;
}
export const UpdateItemTemplate = async({ id }: Props) => {
  const { data } = await getOne({ id });
  const t = await getTranslations('Update');
  const { IoCreateOutline } = icons();

  return (
    <div className={style.container}>
      <div className={style.subContainer}>
        <div className={style.subTitle}>
          <IoCreateOutline />
          <h2>{t('title')}</h2>
        </div>
        <FormUpdate data={data} id={id}/>
      </div>
    </div>
  );
};
