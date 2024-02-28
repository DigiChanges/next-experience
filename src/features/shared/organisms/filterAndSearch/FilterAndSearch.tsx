import style from './filterAndSearch.module.css';
import { InputFilter } from '@/features/shared/molecules/inputFilter/InputFilter';
import { Button, Input as InputSearch } from '@nextui-org/react';
import React from 'react';
import { Filter } from '@/features/shared/interfaces/Filter';
import { useTranslations } from 'next-intl';

type Props = {
  handleSetKey:(key: string) => void;
  searchType: string;
  inputVal: string;
  setInputVal: any;
  handleSearch: () => void;
  inputFilterData: Filter[]
}



export const FilterAndSearch = ({
  handleSearch,
  searchType,
  setInputVal,
  handleSetKey,
  inputVal,
  inputFilterData
}: Props) => {
  const t = useTranslations('Items');

  return (
    <div className={style.containerSelect}>
      <div className={style.containerInputFilter}>
        <InputFilter data={inputFilterData} setValue={handleSetKey}/>
      </div>
      <div className={style.containerInput}>
        <div className={style.input}>
          <InputSearch
            type={searchType}
            value={inputVal}
            onChange={e => setInputVal(e.target.value)}
            labelPlacement={'outside'}
            label={t('search')}
            classNames={{
              input: ['bg-default'],
              inputWrapper: [style.inputWrapper]
            }}
          />
        </div>
        <div className={style.btn}>
          <Button onClick={handleSearch}>{t('button')}</Button>
        </div>
      </div>
    </div>
  );
};
