import React from 'react';
import { SearchIcon } from '@nextui-org/shared-icons';
import { useTranslations } from 'next-intl';

import { OptionKey } from '@/features/items/constants/selectOptionsData';
import { InputSearch } from '@/features/shared/atoms/inputSearch/InputSearch';

import style from './input-search-simple.module.css';

type Props = {
  handleSetFilterValues: (values: { term: string }) => void;
  keySelected: OptionKey;
};

export const InputSearchSimple = ({ keySelected, handleSetFilterValues }: Props) => {
  const t = useTranslations('Items');

  return (
    <InputSearch
      type={keySelected.type}
      onChange={(e) =>
        handleSetFilterValues({
          term: e.target.value,
        })
      }
      placeholder={t('search')}
      classNames={{
        input: [style.input],
        inputWrapper: [style.inputWrapper],
      }}
      startContent={<SearchIcon className={style.searchIcon} />}
    />
  );
};
