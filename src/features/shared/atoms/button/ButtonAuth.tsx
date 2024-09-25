import React from 'react';
import style from './button.module.css';

type Props = {
    descriptionActive: string;
    img?: string;
    alt?: string
}


export const ButtonAuth = (props: Props) => {
  return (
    <button className={style.btn}>
      <span>{props.descriptionActive}</span>
    </button>
  );
};
