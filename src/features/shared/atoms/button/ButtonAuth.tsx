import React from 'react';

import style from './button.module.css';

type Props = {
  descriptionActive: string;
  img?: string;
  alt?: string;
  styleButton?: string;
};

export const ButtonAuth = (props: Props) => {
  return (
    <button className={props.styleButton ? props.styleButton : style.btn}>
      <span>{props.descriptionActive}</span>
    </button>
  );
};
