import React from 'react';
import { getTranslations } from 'next-intl/server';

import { fetchUser } from '@/features/shared/actions/fetchUsers';
import { icons } from '@/features/shared/hooks/icons';

import { getRoles } from '@/features/users/actions/adminUserAction';
import { RolesResponse } from '@/features/users/interfaces/rolesResponse';
import { FormUpdateUser } from '@/features/users/organisms/formUpdate/FormUpdateUser';

import style from './updateUserTemplate.module.css';

type Props = {
  id: string;
};
export const UpdateUserTemplate = async ({ id }: Props) => {
  const data = await fetchUser(id);
  const roles = await getRoles();
  const t = await getTranslations('Update');
  const { IoCreateOutline } = icons();

  return (
    <div className={style.container}>
      <div className={style.subContainer}>
        <div className={style.subTitle}>
          <IoCreateOutline />
          <h2>{t('titleUser')}</h2>
        </div>
        <FormUpdateUser roles={roles as RolesResponse[]} data={data} id={id} />
      </div>
    </div>
  );
};
