import React from 'react';
import { useTranslations } from 'next-intl';

import { OptionKey } from '@/features/items/constants/selectOptionsData';
import { ButtonForm } from '@/features/shared/atoms/button/ButtonForm';
import { SelectColorType } from '@/features/shared/atoms/select/SelectForm';
import { icons } from '@/features/shared/hooks/icons';
import { Filter } from '@/features/shared/interfaces/Filter';
import { InputDynamic } from '@/features/shared/molecules/inputDynamic/InputDynamic';
import { InputKeysFilter } from '@/features/shared/molecules/inputKeysFilter/inputKeysFilter';

import style from './filter-and-search.module.css';

type Props = {
  handleSetFilterValues: (values: { key?: string; term?: string }) => void;
  keySelected: OptionKey;
  inputFilterData: Filter[];
  handleReplace: () => void;
  handleSetFiltersApplied: () => void;
  classButton?: string;
};

export const FilterAndSearch = ({
  handleReplace,
  inputFilterData,
  keySelected,
  handleSetFilterValues,
  handleSetFiltersApplied,
  classButton,
}: Props) => {
  const t = useTranslations('Items');
  const { IoFunnel } = icons();

  return (
    <div className={style.containerSelect}>
      <div className={style.containerInputFilter}>
        <InputKeysFilter
          color={SelectColorType.SECONDARY}
          data={inputFilterData}
          handleSetFilterValues={handleSetFilterValues}
        />
      </div>
      <div className={style.containerInput}>
        <div className={style.input}>
          <InputDynamic
            color={SelectColorType.SECONDARY}
            keySelected={keySelected}
            handleSetFilterValues={handleSetFilterValues}
          />
        </div>
        <div className={classButton ? classButton : style.btn}>
          <ButtonForm
            onClick={() => {
              handleSetFiltersApplied();
              handleReplace();
            }}
          >
            <IoFunnel />
            {t('button')}
          </ButtonForm>
        </div>
      </div>
    </div>
  );
};
