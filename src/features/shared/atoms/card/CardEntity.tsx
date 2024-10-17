import React from 'react';
import { Card, CardHeader } from '@nextui-org/react';

import { Dropdown } from '@/features/shared/atoms/dropdown/Dropdown';
import { SizeType } from '@/features/shared/atoms/swich/switch';
import PayloadProps from '@/features/shared/interfaces/PayloadProps';

type CardItemProps = {
  item: React.ReactNode;
  className: {
    card: string;
    header: string;
  };
  radius: SizeType;
  isDropdownOpen: boolean;
  handleDropdown: () => void;
  id: string;
  handleDelete: ({ id }: PayloadProps) => Promise<void>;
  editPath: string;
};

export const CardEntity = ({
  editPath,
  handleDelete,
  item,
  className,
  radius,
  isDropdownOpen,
  handleDropdown,
  id,
}: CardItemProps) => {
  return (
    <Card className={className?.card} radius={radius} id={id}>
      <CardHeader className={className?.header}>
        <Dropdown
          editPath={editPath}
          handleDelete={handleDelete}
          isDropdownOpen={isDropdownOpen}
          handleDropdown={handleDropdown}
          id={id}
        />
      </CardHeader>
      {item}
    </Card>
  );
};
