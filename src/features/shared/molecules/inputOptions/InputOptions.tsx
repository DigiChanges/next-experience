import React from 'react';

import { SelectColorType, SelectForm } from '@/features/shared/atoms/select/SelectForm';
import style from '@/features/shared/molecules/inputKeysFilter/input-keys-filter.module.css';
import { OptionKey } from '@/features/users/interfaces/OptionKey';

type Props = {
  handleSetFilterValues: (values: { term: string }) => void;
  keySelected: OptionKey;
  color: SelectColorType;
  place: string;
};
export const InputOptions = ({ color, keySelected, handleSetFilterValues, place }: Props) => {
  if (!keySelected.options) {
    throw new Error('You must set options to use this filter');
  }
  const dataProps = {
    color,
    classNames: {
      title: style.color,
    },
    place,
  };

  return (
    <SelectForm
      // TODO: Ver porque no selecciona automaticamente la opcion 0
      defaultSelectedKeys={[keySelected.options[0].value]}
      classNames={{
        base: style.container,
        mainWrapper: style.label,
        listbox: style.listbox,
        popoverContent: style.popoverContent,
        trigger: style.rigger,
      }}
      data={keySelected.options}
      dataProps={dataProps}
      func={handleSetFilterValues}
    />
  );
};
