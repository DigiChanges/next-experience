import React from 'react';
import style from './button.module.css';
import Image from 'next/image';

interface Props {
    descriptionActive: string;
    img: string;
    alt: string
}


export const ButtonAuth: React.FC<Props> = (props) => {
  return (
    <button className={style.btn}>
      <div className={style.descriptionBtn}>
        <Image width={100} height={100} src={props.img} alt={props.alt} />
        <span>{props.descriptionActive}</span>
      </div>
    </button>
  );
};
