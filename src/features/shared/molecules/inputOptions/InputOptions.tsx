import { Select, SelectItem } from '@nextui-org/react';
import style from '@/features/shared/molecules/inputKeysFilter/inputKeysFilter.module.css';
import React from 'react';
import { useTranslations } from 'next-intl';
import { OptionKey } from '@/features/items/constants/selectOptionsData';

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
  const t = useTranslations('Items');

  return (
    <Select
      labelPlacement={'outside'}
      label={t('filter')}
      // TODO: Ver porque no selecciona automaticamente la opcion 0
      defaultSelectedKeys={keySelected.options[0].value}
      classNames={{
        base:style.container,
        mainWrapper: style.label,
        listbox: style.listbox,
        popoverContent:style.popoverContent,
        trigger:style.rigger
      }}
    >
      {keySelected.options.map(({ value, label }) =>
        <SelectItem
          color='secondary'
          classNames={{
            title: style.color
          }}
          onClick={() => handleSetFilterValues({ term: value })}
          key={value}>
          {label}
        </SelectItem>
      )}
    </Select>
  );
};
