'use client';
import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { CardItem } from '@/features/items/atoms/card/CardItem';
import style from './list.module.css';
import { AddItemBtn } from '../atoms/addItem/AddItemBtn';
import { ItemsResponse } from '@/features/items/interfaces/itemsResponse';
import { Pagination } from '@nextui-org/react';
import { usePagination } from '@/features/shared/hooks/usePagination';
import { useFilter } from '@/features/shared/hooks/useFilter';
import { PaginationAPI } from '@/features/shared/interfaces/PaginationAPI';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { OptionKey, selectOptionsData } from '@/features/items/constants/selectOptionsData';
import { NoItemsToDisplay } from '@/features/items/atoms/noItems/NoItemsToDisplay';
import { Show } from '@/features/shared/atoms/show/Show';
import { FilterAndSearch } from '@/features/shared/organisms/filterAndSearch/FilterAndSearch';
import { Title } from '@/features/items/atoms/title/Title';
import { FiltersApplied } from '@/features/shared/molecules/filtersApplied/FiltersApplied';

interface Props {
    items: ItemsResponse[]
    pagination: PaginationAPI;
}
export const List: React.FC<Props> = ({ items, pagination }) => {
  const [keySelected, setKeySelected] = useState<OptionKey>({
    ...selectOptionsData[0]
  });
  const searchParams = useSearchParams();
  const params = useMemo(() => new URLSearchParams(searchParams), [searchParams]);
  const pathname = usePathname();
  const { replace } = useRouter();
  const { handlePage, currentPage } = usePagination(pagination, params);
  const { handleSetFilterValues, filterValues, filtersApplied, handleRemoveFilter, handleSetFiltersApplied } = useFilter(params);

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
        <Title/>
        <div className={style.subcontainerAddFilter}>
          <div className={style.subcontainerAddFilter2}>
            <h2>Select filter</h2>
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
            />
          </div>
        </div>
        <div className={style.containerAddItemBtn}>
          <AddItemBtn/>
        </div>
      </div>
      <NoItemsToDisplay data={items}/>
      <div className={style.cards}>
        {items.map((item) => (
            <CardItem key={item.id} name={item.name} type={item.type} id={item.id}/>
        ))}
      </div>
      <div className={style.containerPaginationAndAdd}>
        <Show when={items.length > 0}>
          <div className={style.testNav}>
            <Pagination onChange={handlePage} page={currentPage} total={pagination.lastPage}
              color={'secondary'}/>
          </div>
        </Show>
      </div>
    </section>
  );
};
