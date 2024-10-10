import React from 'react';

import { icons } from '@/features/shared/hooks/icons';

import style from './Sort.module.css';

type Props = {
  isResponsive: boolean;
};
export const SortComponent = (props: Props) => {
  const { IoSwapVertical } = icons();
  return (
    <div className={props.isResponsive ? style.containerResponsive : style.container}>
      <div className={style.containerSort}>
        <input className={style.inputSort} name='sort' type='radio' id='name' />
        <label className={style.labelSort} htmlFor='name'>
          <IoSwapVertical />
          Name
        </label>
      </div>
      <div className={style.containerSort}>
        <input className={style.inputSort} name='sort' type='radio' id='type' />
        <label className={style.labelSort} htmlFor='type'>
          <IoSwapVertical />
          Type
        </label>
      </div>
    </div>
  );
};
