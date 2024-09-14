import React from 'react';
import { Filter } from '../../interfaces/Filter';
import style from './inputKeysFilter.module.css';
import { SelectForm } from '@/features/shared/atoms/select/SelectForm';

interface Props {
    data: Filter[];
  handleSetFilterValues: (values: {key: string}) => void;
}

export const InputKeysFilter = ({ data, handleSetFilterValues }: Props) => {
  const dataProps = {
    color: 'secondary',
    classNames:{
      title: style.color
    },
    place:'InputKeysFilter'
  };
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
      data={data}
      dataProps={dataProps}
      func={handleSetFilterValues}
    />
  );
};
