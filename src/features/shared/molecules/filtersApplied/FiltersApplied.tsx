import style from './filtersApplied.module.css';
import React from 'react';
import { FilterApplied } from '@/features/shared/hooks/useFilter';
import { icons } from '@/features/shared/hooks/icons';
import {useTranslations} from "next-intl";

type Props = {
  filtersApplied:  FilterApplied[]
  handleRemoveFilter: (filter: FilterApplied) => void;
  handleReplaceURL: () => void;
}
export const FiltersApplied = ({
  filtersApplied,
  handleRemoveFilter,
  handleReplaceURL
}: Props) => {
  const { IoCloseOutline } = icons();
  const t = useTranslations('Items');

  return (
    <div className={style.containerFiltersApplied}>
      <div className={style.containerLi}>
      {
        filtersApplied.map((el) =>
          <li key={el.key} className={style.liRemove}>{
            el.key}
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
        filtersApplied?.length > 0 && <button className={style.buttonClear}>{t('clearAll')}</button>
      }
    </div>
  );
};
