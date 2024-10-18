import React from 'react';
import { getTranslations } from 'next-intl/server';

import { getOne } from '@/features/items/actions/ItemAction';
import { icons } from '@/features/shared/hooks/icons';

import { FormUpdateUser } from '@/features/users/organisms/formUpdate/FormUpdateUser';

import style from './updateUserTemplate.module.css';

type Props = {
  id: string;
};
export const UpdateUserTemplate = async ({ id }: Props) => {
  // TODO: hay que cambiar el getOne
  const data = await getOne({ id });
  const t = await getTranslations('Update');
  const { IoCreateOutline } = icons();

  return (
    <div className={style.container}>
      <div className={style.subContainer}>
        <div className={style.subTitle}>
          <IoCreateOutline />
          <h2>{t('titleUser')}</h2>
        </div>
        <FormUpdateUser data={data} id={id} />
      </div>
    </div>
  );
};
