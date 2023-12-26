import style from './filtersApplied.module.css';
import Image from 'next/image';
import React from 'react';
import { FilterApplied } from '@/features/shared/hooks/useFilter';
import { icons } from '@/features/shared/hooks/icons';

type Props = {
  filtersApplied: FilterApplied[]
  handleRemoveFilter: (filter: FilterApplied) => void;
}
export const FiltersApplied = ({
  filtersApplied,
  handleRemoveFilter
}: Props) => {
  const { iconCloseFilter } = icons();
  return (
    <div className={style.containerFiltersApplied}>
      {
        filtersApplied.map((el) =>
          <li key={el.key} className={style.liRemove}>{
            el.key}
          <button className={style.btnRemove} onClick={() => handleRemoveFilter(el)}>
            <Image src={iconCloseFilter.src} alt={'button close'} width={50} height={50}/>
          </button>
          </li>)
      }
    </div>
  );
};
