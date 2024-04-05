import { Input as InputSearch } from '@nextui-org/input';
import style from './inputSearchSimple.module.css';
import React from 'react';
import { useTranslations } from 'next-intl';
import { OptionKey } from '@/features/items/constants/selectOptionsData';
import {SearchIcon} from "@nextui-org/shared-icons";

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
      placeholder={t('search')}
      classNames={{
          input: [style.input],
          inputWrapper: [style.inputWrapper],
          mainWrapper: [style.mainWrapper]
      }}
      startContent={
          <SearchIcon className={style.searchIcon}/>
      }
    />
  );
};
