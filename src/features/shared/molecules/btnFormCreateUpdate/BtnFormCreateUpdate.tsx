import React from 'react';
import Link from 'next/link';

import style from '@/features/shared/molecules/btnFormCreateUpdate/btnFormCreateUpdate.module.css';

interface Props {
  linkCancel: string;
  textCancel: string;
  disabledButton?: boolean;
  textSubmit: string;
}

export const BtnFormCreateUpdate = ({ linkCancel, textCancel, disabledButton, textSubmit }: Props) => {
  return (
    <div className={style.containerBtn}>
      <div className={style.btnClose}>
        <Link href={linkCancel}>
          <button type='button' className={style.close}>
            {textCancel}
          </button>
        </Link>
      </div>
      <div className={style.btnAdd}>
        <button type='submit' className={style.addItem} disabled={disabledButton ? disabledButton : false}>
          {textSubmit}
        </button>
      </div>
    </div>
  );
};
