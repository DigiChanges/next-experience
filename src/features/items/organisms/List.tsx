'use client';
import React, { useEffect, useState, useCallback } from 'react';
import { CardItem } from '@/features/items/atoms/card/CardItem';
import style from './list.module.css';
import { AddItemBtn } from '../atoms/addItem/AddItemBtn';
import { ItemsResponse } from '@/features/items/interfaces/itemsResponse';
import { Button, Pagination, Input  } from '@nextui-org/react';
import { usePagination } from '@/features/shared/hooks/usePagination';
import { useFilter } from '@/features/shared/hooks/useFilter';
import { PaginationAPI } from '@/features/shared/interfaces/PaginationAPI';
import { useSearchParams } from 'next/navigation';
import { selectOptionsData } from '@/features/items/constants/selectOptionsData';
import { NoItemsToDisplay } from '@/features/items/atoms/noItems/NoItemsToDisplay';
import { Show } from '@/features/shared/atoms/show/Show';
import {useTranslations} from "next-intl";
import { FilterAndSearch } from '@/features/shared/organisms/filterAndSearch/FilterAndSearch';
import { Title } from '@/features/items/atoms/title/Title';
import { FiltersApplied } from '@/features/shared/molecules/filtersApplied/FiltersApplied';
import { useTranslations } from 'next-intl';

interface Props {
    items: ItemsResponse[]
    pagination: PaginationAPI;
}

export const List: React.FC<Props> = ({ items, pagination }) => {
  const [inputVal, setInputVal] = useState('');
  const [searchType, setSearchType] = useState('string');
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const { handlePage, currentPage } = usePagination(pagination, params);
  const { handleSetTerm, handleSetKey, filtersApplied, handleRemoveFilter } = useFilter(params);
  const t = useTranslations('Items');



  const handleSearch = () => {
    if (inputVal.trim().length > 0) {
      handlePage(1);
      handleSetTerm(inputVal);
      setInputVal('');
    }
  };

  const handleSearchType = useCallback(() => {
    const data = selectOptionsData.find(({ value }) => value === key);
    if (data) {
      setSearchType(data.type);
    }
  }, [key]);

  useEffect(() => {
    handleSearchType();
  }, [handleSearchType]);

  useEffect(() => {
    if (items.length === 0) {
      handlePage(1);
    }
  }, [handlePage, items]);

  return (
    <section className={style.container}>
      <div className={style.containerAddFilter}>
        <div className={style.subcontainerAddFilter}>
          <Title/>
          <FilterAndSearch
            handleSetKey={handleSetKey}
            searchType={searchType}
            inputVal={inputVal}
            setInputVal={setInputVal}
            handleSearch={handleSearch}
            inputFilterData={selectOptionsData}
          />
        </div>

        <div className={style.containerAddItem}>
          <FiltersApplied
            filtersApplied={filtersApplied}
            handleRemoveFilter={handleRemoveFilter}
          />
          <AddItemBtn/>
        </div>
      </div>
      <NoItemsToDisplay data={items}/>
      <div className={style.cards}>
        {items.map((item) => (
          <CardItem key={item.id} name={item.name} type={item.type} id={item.id}/>
        ))}
      </div>
      <div className={style.containerPagination}>
        <AddItemBtn/>
        <Show when={items.length > 0}>
          <Pagination onChange={handlePage} page={currentPage} total={pagination.lastPage}
            color={'secondary'}/>
        </Show>
      </div>
    </section>
  );
};
