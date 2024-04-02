import { Input as InputSearch } from '@nextui-org/input';
import style from './inputSearchSimple.module.css';
import React from 'react';
import { useTranslations } from 'next-intl';
import { OptionKey } from '@/features/items/constants/selectOptionsData';

type Props = {
  handleSetFilterValues: (values: {
    term: string
  }) => void;
  keySelected: OptionKey;
}

export const InputSearchSimple = ({ keySelected,  handleSetFilterValues }: Props) => {
  const t = useTranslations('Items');

  return (
    <InputSearch
      type={keySelected.type}
      onChange={e => handleSetFilterValues({
        term: e.target.value
      })}
      labelPlacement={'outside'}
      label={t('search')}
      classNames={{
        input: ['bg-default'],
        inputWrapper: [style.inputWrapper]
      }}
    />
  );
};
