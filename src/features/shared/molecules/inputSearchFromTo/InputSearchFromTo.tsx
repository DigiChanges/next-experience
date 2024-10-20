import React, { useEffect, useState } from 'react';
import { SearchIcon } from '@nextui-org/shared-icons';
import { useTranslations } from 'next-intl';

import { InputSearch } from '@/features/shared/atoms/inputSearch/InputSearch';

import { OptionKey } from '@/features/users/interfaces/OptionKey';

import style from './input-search-from-to.module.css';

type Props = {
  keySelected: OptionKey;
  handleSetFilterValues: (values: { term: string }) => void;
};

interface ValuesState {
  from: number | Date | null;
  to: number | Date | null;
}

export const InputSearchFromTo = ({ keySelected, handleSetFilterValues }: Props) => {
  const [values, setValues] = useState<ValuesState>({
    from: null,
    to: null,
  });
  const t = useTranslations('Items');

  const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [field]: e.target.value });
  };

  const handleSetValuesUnified = () => {
    handleSetFilterValues({
      term: `${values.from?.toString()} / ${values.to?.toString()}`,
    });
  };

  useEffect(() => {
    handleSetValuesUnified();
  }, [values]);

  return (
    <>
      <InputSearch
        type={keySelected.type}
        onChange={handleInputChange('from')}
        // onChange={e => setInputVal(e.target.value)}
        placeholder={t('search')}
        classNames={{
          input: ['bg-bgInputFilter'],
          inputWrapper: [style.inputWrapper],
        }}
        startContent={keySelected.type !== 'date' && <SearchIcon className={style.searchIcon} />}
      />
      <InputSearch
        type={keySelected.type}
        onChange={handleInputChange('to')}
        placeholder={t('search')}
        classNames={{
          input: ['bg-bgInputFilter'],
          inputWrapper: [style.inputWrapper],
        }}
        startContent={keySelected.type !== 'date' && <SearchIcon className={style.searchIcon} />}
      />
    </>
  );
};
