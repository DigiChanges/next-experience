import React from 'react';
import { Filter } from '../../interfaces/Filter';
import style from './inputKeysFilter.module.css';
import { SelectItemForm } from '@/features/shared/atoms/select/SelectItemform';
import { SelectForm } from '@/features/shared/atoms/select/SelectForm';

interface Props {
    data: Filter[];
  handleSetFilterValues: (values: {key: string}) => void;
}

export const InputKeysFilter = ({ data, handleSetFilterValues }: Props) => {
  return (
    <SelectForm
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
        <SelectItemForm
          color='secondary'
          classNames={{
            title: style.color
          }}
          onClick={() => handleSetFilterValues({ key: value })}
          key={value}
          label={label}
        />
      )}
    </SelectForm>
  );
};
