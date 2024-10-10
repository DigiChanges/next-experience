import React from 'react';
import { Card, CardHeader } from '@nextui-org/react';

import { Dropdown } from '@/features/shared/atoms/dropdown/Dropdown';
import { SizeType } from '@/features/shared/atoms/swich/switch';

type CardItemProps = {
  type: string;
  item: React.ReactNode;
  className: {
    card: string;
    header: string;
  };
  radius: SizeType;
  isDropdownOpen: boolean;
  handleDropdown: () => void;
  id: string;
};

export const CardItem = ({ type, item, className, radius, isDropdownOpen, handleDropdown, id }: CardItemProps) => {
  return (
    <Card className={className?.card} radius={radius} id={id}>
      <CardHeader className={className?.header}>
        <Dropdown type={type} isDropdownOpen={isDropdownOpen} handleDropdown={handleDropdown} id={id} />
      </CardHeader>
      {item}
    </Card>
  );
};
