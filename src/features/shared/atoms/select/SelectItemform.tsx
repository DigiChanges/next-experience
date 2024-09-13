import React, { ChangeEvent } from 'react';
import { SelectItem } from '@nextui-org/react';

type Props = {
    color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | undefined
    onClick?: (event: ChangeEvent<HTMLInputElement>) => void;
    key: string | number;
    classNames: {
        title: string,
        base?: string[],
        wrapper?: string[], // title and description wrapper
        description?: string[],
        selectedIcon?: string[],
        shortcut?: string[],
    }
    label: string;
}

export const SelectItemForm = ({ color, classNames, onClick, key, label }: Props) => {
  const handleClick = (event:any) => {
    if (onClick) {
      onClick(event);
    }
  };
  return (
    <SelectItem
      color={color}
      classNames={classNames}
      onClick={handleClick}
      key={key}>
      {label}
    </SelectItem>);
};
