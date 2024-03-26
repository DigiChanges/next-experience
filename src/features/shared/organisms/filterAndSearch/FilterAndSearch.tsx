import style from './filterAndSearch.module.css';
import { InputKeysFilter } from '@/features/shared/molecules/inputKeysFilter/inputKeysFilter';
import { Button } from '@nextui-org/react';
import React from 'react';
import { Filter } from '@/features/shared/interfaces/Filter';
import { useTranslations } from 'next-intl';
import { InputDynamic } from '@/features/shared/molecules/inputDynamic/InputDynamic';
import { OptionKey } from '@/features/items/constants/selectOptionsData';
import {icons} from "@/features/shared/hooks/icons";
import {IoFunnel} from "react-icons/io5";

type Props = {
  handleSetFilterValues:(values: {
    key?: string;
    term?: string;
  }) => void;
  keySelected: OptionKey,
  inputFilterData: Filter[];
  handleReplace: () => void;
  handleSetFiltersApplied: () => void;
}


export const FilterAndSearch = ({
  handleReplace,
  inputFilterData,
  keySelected,
  handleSetFilterValues,
  handleSetFiltersApplied
}: Props) => {
  const t = useTranslations('Items');
  const { IoFunnel } = icons();

  return (
    <div className={style.containerSelect}>
      <div className={style.containerInputFilter}>
        <InputKeysFilter data={inputFilterData} handleSetFilterValues={handleSetFilterValues}/>
      </div>
      <div className={style.containerInput}>
        <div className={style.input}>
          <InputDynamic
            keySelected={keySelected}
            handleSetFilterValues={handleSetFilterValues}
          />
        </div>
        <div className={style.btn}>
          <Button onClick={() => {
            handleSetFiltersApplied();
            handleReplace();
          }}><IoFunnel /> {t('button')}</Button>
        </div>
      </div>
    </div>
  );
};
