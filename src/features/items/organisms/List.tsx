'use client';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { CardItem } from '@/features/shared/atoms/card/CardItem';
import style from './list.module.css';
import styleCard from './card.module.css';
import { AddItemBtn } from '@/features/items/atoms/addItem/AddItemBtn';
import { ItemsResponse } from '@/features/items/interfaces/itemsResponse';
import { usePagination } from '@/features/shared/hooks/usePagination';
import { useFilter } from '@/features/shared/hooks/useFilter';
import { PaginationAPI } from '@/features/shared/interfaces/PaginationAPI';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { OptionKey, selectOptionsData } from '@/features/items/constants/selectOptionsData';
import { NoItemsToDisplay } from '@/features/items/atoms/noItems/NoItemsToDisplay';
import { FilterAndSearch } from '@/features/shared/organisms/filterAndSearch/FilterAndSearch';
import { Title } from '@/features/items/atoms/title/Title';
import { FiltersApplied } from '@/features/shared/molecules/filtersApplied/FiltersApplied';
import { useTranslations } from 'next-intl';
import { FilterModal } from '@/features/shared/atoms/filterModal/filterModal';
import { SortComponent } from '@/features/shared/atoms/sort/Sort';
import { SizeType, SwitchComponent } from '@/features/shared/atoms/swich/switch';
import { SelectColorType } from '@/features/shared/atoms/select/SelectForm';
import { PaginationComponent } from '@/features/shared/atoms/pagination/Paginations';

type Props = {
    items: ItemsResponse[]
    pagination: PaginationAPI;
}
export const List = ({ items, pagination }: Props) => {
  const [keySelected, setKeySelected] = useState<OptionKey>({
    ...selectOptionsData[0]
  });
  const searchParams = useSearchParams();
  const params = useMemo(() => new URLSearchParams(searchParams), [searchParams]);
  const pathname = usePathname();
  const { replace } = useRouter();
  const { handlePage, currentPage } = usePagination(pagination, params);
  const { handleSetFilterValues, filterValues, filtersApplied, handleRemoveFilter, handleSetFiltersApplied, handleRemoveFilterAll } = useFilter(params);
  const t = useTranslations('Items');

  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const handleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleReplaceURL = () => {
    replace(`${pathname}?${params.toString()}`);
  };

  useEffect(() => {
    handleSetFilterValues({
      key: selectOptionsData[0].value
    });
  }, []);

  const handleSearchType = useCallback(() => {
    const data = selectOptionsData.find(({ value }) => value === filterValues.key);
    if (data) {
      setKeySelected(data);
    }
  }, [filterValues.key]);

  useEffect(() => {
    handlePage(1);
  }, [filterValues.term]);

  useEffect(() => {
    handleSearchType();
  }, [handleSearchType]);

  // TODO: Analizar si esto es realmente necesario
  useEffect(() => {
    if (items.length === 0) {
      handlePage(1);
    }
  }, [handlePage, items]);

  return (
    <section className={style.container}>
      <div className={style.containerAddFilter}>
        <Title />
        <p className={style.subtitle}>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
        <div className={style.subcontainerAddFilter}>
          <div className={style.subcontainerAddFilter2}>
            <h2>{t('selectFilter')}</h2>
            <FilterAndSearch
              handleSetFiltersApplied={handleSetFiltersApplied}
              handleSetFilterValues={handleSetFilterValues}
              keySelected={keySelected}
              handleReplace={handleReplaceURL}
              inputFilterData={selectOptionsData}
            />
          </div>
          <div className={style.containerAddItem}>
            <FiltersApplied
              filtersApplied={filtersApplied}
              handleReplaceURL={handleReplaceURL}
              handleRemoveFilter={handleRemoveFilter}
              handleRemoveFilterAll={handleRemoveFilterAll}
            />
          </div>
        </div>
        <div className={style.containerAddItemBtnAndModal}>
          <div className={style.containerAddItemBtn}>
            <SortComponent isResponsive={false}/>
            <SwitchComponent className={style.containerSwitch} size={SizeType.SMALL} color={SelectColorType.SECONDARY} defaultSelected>
              Active
            </SwitchComponent>
            <AddItemBtn/>
          </div>
          <FilterModal
            handleSetFiltersApplied={handleSetFiltersApplied}
            handleSetFilterValues={handleSetFilterValues}
            keySelected={keySelected}
            handleReplace={handleReplaceURL}
            inputFilterData={selectOptionsData}
            filtersApplied={filtersApplied}
            handleRemoveFilter={handleRemoveFilter}
            handleRemoveFilterAll={handleRemoveFilterAll}
          />
        </div>
      </div>
      <NoItemsToDisplay data={items}/>
      {items.length && <div className={style.cards}>
        {items.map((item) => (
          <CardItem key={item.id}
            className={{ card:isDropdownOpen ? `${styleCard.backgroundHover} ${styleCard.container}` : styleCard.container, header:styleCard.containerHeader }}
            radius={SizeType.SMALL}
            id={item.id}
            handleDropdown={handleDropdown}
            isDropdownOpen={isDropdownOpen}
            item={
              <div className={styleCard.containerInfo}>
                <h2 className="text-md">Type: {item.type}</h2>
                <h3 className={styleCard.name}>{item.name}</h3>
                <p>$500.000</p>
                <p>EXP: 25/12/2024</p>
              </div>
            }/>

        ))}
      </div>}
      <div className={style.containerPaginationAndAdd}>
        {items.length > 0 && <div className={style.testNav}>
          <PaginationComponent onChange={handlePage} page={currentPage} total={pagination.lastPage}
            color={SelectColorType.SECONDARY}/>
        </div>}
      </div>
    </section>
  );
};
