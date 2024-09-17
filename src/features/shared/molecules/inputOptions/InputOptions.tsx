import style from '@/features/shared/molecules/inputKeysFilter/inputKeysFilter.module.css';
import React from 'react';
import { OptionKey } from '@/features/items/constants/selectOptionsData';
import { SelectColorType, SelectForm } from '@/features/shared/atoms/select/SelectForm';

interface Props {
  handleSetFilterValues: (values: {
    term: string
  }) => void;
  keySelected: OptionKey;
  color:SelectColorType
}
export const InputOptions = ({ color, keySelected, handleSetFilterValues }: Props) => {
  if (!keySelected.options) {
    throw new Error('You must set options to use this filter');
  }
  const dataProps = {
    color,
    classNames:{
      title: style.color
    },
    place:'InputKeysFilter'
  };

  return (
    <SelectForm
      // TODO: Ver porque no selecciona automaticamente la opcion 0
      defaultSelectedKeys={[keySelected.options[0].value]}
      classNames={{
        base:style.container,
        mainWrapper: style.label,
        listbox: style.listbox,
        popoverContent:style.popoverContent,
        trigger:style.rigger
      }}
      data={keySelected.options}
      dataProps={dataProps}
      func={handleSetFilterValues}
    />
  );
};
