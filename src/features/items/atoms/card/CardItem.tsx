import React, {useState} from 'react';
import { Card, CardHeader  } from '@nextui-org/react';
import style from './card.module.css';
import {Dropdown} from "@/features/shared/atoms/dropdown/Dropdown";

interface CardItemProps
{
    name: string;
    type: number;
    id: string;
}
export const  CardItem: React.FC<CardItemProps> = ({ type, name, id }) => {
  const [isDropdownOpen, setisDropdownOpen] = useState<boolean>(false);

  const handleDropdown = () => {
    setisDropdownOpen(!isDropdownOpen);
  };
  return (
    <Card className={isDropdownOpen? `${style.backgroundHover} ${style.container}` : style.container}
      radius="lg"
    >
      <CardHeader className={style.containerHeader}>
        <Dropdown isDropdownOpen={isDropdownOpen} handleDropdown={handleDropdown} id={id} />
      </CardHeader>
      <div className={style.containerInfo}>
        <h2 className="text-md">Type: {type}</h2>
        <h3 className={style.name}>{name}</h3>
        <p>$500.000</p>
        <p>EXP: 25/12/2024</p>
      </div>
    </Card>
  );
};

