import React from 'react';
import Link from 'next/link';

import style from '@/features/shared/atoms/addBtn/addBtn.module.css';
import { ButtonForm } from '@/features/shared/atoms/button/ButtonForm';
import { icons } from '@/features/shared/hooks/icons';

interface Props {
  linkButton: string;
  ariaLabelButton: string;
  textButton: string;
}
export const AddBtn = ({ linkButton, ariaLabelButton, textButton }: Props) => {
  const { IoAddOutline } = icons();

  return (
    <div className={style.container}>
      <Link href={linkButton}>
        <ButtonForm ariaLabel={ariaLabelButton}>
          <IoAddOutline />
          {textButton}
        </ButtonForm>
      </Link>
    </div>
  );
};
