import { Input as InputSearch } from '@nextui-org/input';
import style from './inputSearchFromTo.module.css';
import React, { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { OptionKey } from '@/features/items/constants/selectOptionsData';


type Props = {
  keySelected: OptionKey;
  handleSetFilterValues: (values: {
    term: string
  }) => void;
}

interface ValuesState {
  from: number | Date | null;
  to: number | Date | null;
}

export const InputSearchFromTo = ({ keySelected, handleSetFilterValues }: Props) => {
  const [values, setValues] = useState<ValuesState>({
    from: null,
    to: null
  });
  const t = useTranslations('Items');

  const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [field]: e.target.value });
  };

  const handleSetValuesUnified = () => {
    handleSetFilterValues({
      term: `${values.from?.toString()}-${  values.to?.toString()}`
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
        labelPlacement={'outside'}
        label={t('search')}
        classNames={{
          input: ['bg-default'],
          inputWrapper: [style.inputWrapper]
        }}
      />
      <InputSearch
        type={keySelected.type}
        onChange={handleInputChange('to')}
        labelPlacement={'outside'}
        label={t('search')}
        classNames={{
          input: ['bg-default'],
          inputWrapper: [style.inputWrapper]
        }}
      />
    </>
  );
};