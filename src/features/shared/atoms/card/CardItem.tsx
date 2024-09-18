import React from 'react';
import { Card, CardHeader  } from '@nextui-org/react';
import { SizeType } from '@/features/shared/atoms/swich/switch';
import { Dropdown } from '@/features/shared/atoms/dropdown/Dropdown';

type CardItemProps = {
  item:React.ReactNode;
  className: {
    card:string;
    header:string;
  };
  radius:SizeType;
  isDropdownOpen:boolean;
  handleDropdown: ()=> void;
  id:string;
}

export const  CardItem = ({ item, className, radius, isDropdownOpen, handleDropdown, id }: CardItemProps) => {
  return (
    <Card className={className?.card} radius={radius} id={id}>
      <CardHeader className={className?.header}>
        <Dropdown isDropdownOpen={isDropdownOpen} handleDropdown={handleDropdown} id={id} />
      </CardHeader>
      {item}
    </Card>
  );
};

