import React from 'react';

import { getRoles } from '@/features/shared/actions/roleActions';
import { SubTitle } from '@/features/users/atoms/subtitle/Subtitle';
import { RolesResponse } from '@/features/users/interfaces/rolesResponse';
import { FormCreate } from '@/features/users/organisms/formCreate/FormCreateUser';

import style from './createUserTemplate.module.css';

export const CreateUserTemplate = async () => {
  const roles = await getRoles();
  return (
    <div className={style.container}>
      <div className={style.subContainer}>
        <SubTitle className={style.subTitle} />
        <FormCreate roles={roles as RolesResponse[]} />
      </div>
    </div>
  );
};
