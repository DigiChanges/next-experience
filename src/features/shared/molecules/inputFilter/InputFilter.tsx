import { Select, SelectItem } from '@nextui-org/react';
import React from 'react';
import { Filter } from '../../interfaces/Filter';
import style from './inputFilter.module.css';
interface Props {
    data: Filter[];
    setValue: (value: string) => void;
}

export const InputFilter = ({ data, setValue }: Props) => {
  return (
    <Select
      labelPlacement={'outside'}
      label="Select filter"
      defaultSelectedKeys={[data[0].value]}
      classNames={{
        base:style.container,
        mainWrapper: style.label,
        listbox: style.listbox,
        popoverContent:style.popoverContent,
        trigger:style.rigger
      }}
    >
      {data.map(({ value, label }) =>
        <SelectItem
          color='secondary'
          classNames={{
            title: style.color
          }}
          onClick={() => setValue(value)}
          key={value}>
          {label}
        </SelectItem>
      )}
    </Select>
  );
};
