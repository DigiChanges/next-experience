import React from 'react';
import { Select } from '@nextui-org/react';

type Props = {
    defaultSelectedKeys: any[],
    classNames: {
        description?: string,
        errorMessage?: string,
        label?: string,
        base?: string,
        value?: string,
        mainWrapper?: string,
        trigger?: string,
        innerWrapper?: string,
        selectorIcon?: string,
        spinner?: string,
        listboxWrapper?: string,
        listbox?: string,
        popoverContent?: string,
        helperWrapper?: string,
    },
    children: any
}

export const SelectForm = ({ defaultSelectedKeys, classNames, children } : Props) => {
  return (
    <Select
      defaultSelectedKeys={defaultSelectedKeys}
      classNames={classNames}
    >
      {children}
    </Select>
  );
};
