import style from './filtersApplied.module.css';
import React from 'react';
import { FilterApplied } from '@/features/shared/hooks/useFilter';
import { icons } from '@/features/shared/hooks/icons';
import { useTranslations } from 'next-intl';

type Props = {
  filtersApplied:  FilterApplied[]
  handleRemoveFilter: (filter: FilterApplied) => void;
  handleReplaceURL: () => void;
  handleRemoveFilterAll: () => void;
}
export const FiltersApplied = ({
  filtersApplied,
  handleRemoveFilter,
  handleReplaceURL,
  handleRemoveFilterAll
}: Props) => {
  const { IoCloseOutline } = icons();
  const t = useTranslations('Items');

  return (
    <div className={style.containerFiltersApplied}>
      <div className={style.containerLi}>
        {
          filtersApplied.map((el) =>
            <li key={el.key} className={style.liRemove}>{
              el.term}
            <button className={style.btnRemove} onClick={() => {
              handleRemoveFilter(el);
              handleReplaceURL();
            }}>
              <IoCloseOutline />
            </button>
            </li>)
        }
      </div>
      {
        filtersApplied?.length > 0 && <button className={style.buttonClear} onClick={() => {
          handleRemoveFilterAll();
          handleReplaceURL();
        }}>{t('clearAll')}</button>
      }
    </div>
  );
};
