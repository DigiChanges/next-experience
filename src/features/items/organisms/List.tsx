'use client';
import React, { useEffect, useState, useCallback } from 'react';
import { CardItem } from '@/features/items/atoms/card/CardItem';
import style from './list.module.css';
import { AddItemBtn } from '../atoms/addItem/AddItemBtn';
import { ItemsResponse } from '@/features/items/interfaces/itemsResponse';
import {Pagination, Switch} from '@nextui-org/react';
import { usePagination } from '@/features/shared/hooks/usePagination';
import { useFilter } from '@/features/shared/hooks/useFilter';
import { PaginationAPI } from '@/features/shared/interfaces/PaginationAPI';
import { useSearchParams } from 'next/navigation';
import { selectOptionsData } from '@/features/items/constants/selectOptionsData';
import { NoItemsToDisplay } from '@/features/items/atoms/noItems/NoItemsToDisplay';
import { Show } from '@/features/shared/atoms/show/Show';
import { FilterAndSearch } from '@/features/shared/organisms/filterAndSearch/FilterAndSearch';
import { Title } from '@/features/items/atoms/title/Title';
import { FiltersApplied } from '@/features/shared/molecules/filtersApplied/FiltersApplied';
import {useTranslations} from "next-intl";
import {icons} from "@/features/shared/hooks/icons";
import {FilterModal} from "@/features/shared/atoms/filterModal/filterModal";
import {SortComponent} from "@/features/shared/atoms/sort/Sort";

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
  const { handleSetTerm, handleSetKey, filtersApplied, handleRemoveFilter, key } = useFilter(params);
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
        <Title isResponsive={false}/>
        <p className={style.subtitle}>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
        <div className={style.subcontainerAddFilter}>
          <div className={style.subcontainerAddFilter2}>
            <h2>{t('selectFilter')}</h2>
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
          </div>
        </div>
        <div className={style.containerAddItemBtnAndModal}>
          <div className={style.containerAddItemBtn}>
            <SortComponent isResponsive={false}/>
            <Switch size="sm" color="secondary" defaultSelected>
              Active
            </Switch>
            <AddItemBtn/>
          </div>
          <FilterModal
              handleSetKey={handleSetKey}
              searchType={searchType}
              inputVal={inputVal}
              setInputVal={setInputVal}
              handleSearch={handleSearch}
              inputFilterData={selectOptionsData}
              filtersApplied={filtersApplied}
              handleRemoveFilter={handleRemoveFilter}
          />
        </div>
      </div>
      <NoItemsToDisplay data={items}/>
      <Show when={items.length}>
        <div className={style.cards}>
          {items.map((item) => (
              <CardItem key={item.id} name={item.name} type={item.type} id={item.id}/>
          ))}
        </div>
      </Show>
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
