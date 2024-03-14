import React from 'react';
import style from './button.module.css';

interface Props {
    descriptionActive: string;
    img?: string;
    alt?: string
}


export const ButtonAuth: React.FC<Props> = (props) => {
  return (
    <button className={style.btn}>
      <span>{props.descriptionActive}</span>
    </button>
  );
};
