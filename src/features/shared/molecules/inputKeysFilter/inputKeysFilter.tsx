import { Select, SelectItem } from '@nextui-org/react';
import React from 'react';
import { Filter } from '../../interfaces/Filter';
import style from './inputKeysFilter.module.css';
import { useTranslations } from 'next-intl';
interface Props {
    data: Filter[];
  handleSetFilterValues: (values: {key: string}) => void;
}

export const InputKeysFilter = ({ data, handleSetFilterValues }: Props) => {
  const t = useTranslations('Items');
  return (
    <Select
      labelPlacement={'outside'}
      label={t('filter')}
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
          onClick={() => handleSetFilterValues({ key: value })}
          key={value}>
          {label}
        </SelectItem>
      )}
    </Select>
  );
};
