import React from 'react';

import { SelectColorType, SelectForm } from '@/features/shared/atoms/select/SelectForm';

import { Filter } from '../../interfaces/Filter';

import style from './input-keys-filter.module.css';

type Props = {
  data: Filter[];
  handleSetFilterValues: (values: { key: string }) => void;
  color: SelectColorType;
};

export const InputKeysFilter = ({ color, data, handleSetFilterValues }: Props) => {
  const dataProps = {
    color,
    classNames: {
      title: style.color,
    },
    place: 'InputKeysFilter',
  };
  return (
    <SelectForm
      defaultSelectedKeys={[data[0].value]}
      classNames={{
        base: style.container,
        mainWrapper: style.label,
        listbox: style.listbox,
        popoverContent: style.popoverContent,
        trigger: style.rigger,
      }}
      data={data}
      dataProps={dataProps}
      func={handleSetFilterValues}
    />
  );
};
