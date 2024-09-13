import style from '@/features/shared/molecules/inputKeysFilter/inputKeysFilter.module.css';
import React from 'react';
import { OptionKey } from '@/features/items/constants/selectOptionsData';
import { SelectItemForm } from '@/features/shared/atoms/select/SelectItemform';
import { SelectForm } from '@/features/shared/atoms/select/SelectForm';

interface Props {
  handleSetFilterValues: (values: {
    term: string
  }) => void;
  keySelected: OptionKey;
}
export const InputOptions = ({ keySelected, handleSetFilterValues }: Props) => {
  if (!keySelected.options) {
    throw new Error('You must set options to use this filter');
  }

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
    >
      {keySelected.options.map(({ value, label }) =>
        <SelectItemForm
          color='secondary'
          classNames={{
            title: style.color
          }}
          onClick={() => handleSetFilterValues({ term: value })}
          key={value}
          label={label}
        />
      )}
    </SelectForm>
  );
};
