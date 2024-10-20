'use client';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { deleteItem } from '@/features/items/actions/ItemAction';
import { selectOptionsData } from '@/features/items/constants/selectOptionsData';
import { ItemsResponse } from '@/features/items/interfaces/itemsResponse';
import { AddBtn } from '@/features/shared/atoms/addBtn/AddBtn';
import { CardEntity } from '@/features/shared/atoms/card/CardEntity';
import { FilterModal } from '@/features/shared/atoms/filterModal/filterModal';
import { NoEntitiesToDisplay } from '@/features/shared/atoms/noEntitiesToDisplay/NoEntitiesToDisplay';
import { PaginationComponent } from '@/features/shared/atoms/pagination/Paginations';
import { SelectColorType } from '@/features/shared/atoms/select/SelectForm';
import { SizeType, SwitchComponent } from '@/features/shared/atoms/swich/switch';
import { Title } from '@/features/shared/atoms/title/Title';
import { useFilter } from '@/features/shared/hooks/useFilter';
import { usePagination } from '@/features/shared/hooks/usePagination';
import { PaginationAPI } from '@/features/shared/interfaces/PaginationAPI';
import { FiltersApplied } from '@/features/shared/molecules/filtersApplied/FiltersApplied';
import { SortComponent } from '@/features/shared/molecules/sort/Sort';
import { FilterAndSearch } from '@/features/shared/organisms/filterAndSearch/FilterAndSearch';

import { OptionKey } from '@/features/users/interfaces/OptionKey';

import styleCard from './card.module.css';
import style from './list.module.css';

type Props = {
  items: ItemsResponse[];
  pagination: PaginationAPI;
};
export const List = ({ items, pagination }: Props) => {
  const [keySelected, setKeySelected] = useState<OptionKey>({ ...selectOptionsData[0] });
  const searchParams = useSearchParams();
  const params = useMemo(() => {
    const newParams = new URLSearchParams();

    const entriesArray = Array.from(searchParams.entries());
    for (const [key, value] of entriesArray) {
      newParams.append(key, value);
    }

    return newParams;
  }, [searchParams]);
  const pathname = usePathname();
  const { replace } = useRouter();
  const { handlePage, currentPage } = usePagination(pagination, params);
  const {
    handleSetFilterValues,
    filterValues,
    filtersApplied,
    handleRemoveFilter,
    handleSetFiltersApplied,
    handleRemoveFilterAll,
  } = useFilter(params);
  const t = useTranslations('Items');

  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);

  const handleDropdown = (id: string) => {
    setOpenDropdownId(openDropdownId === id ? null : id);
  };

  const handleReplaceURL = () => {
    replace(`${pathname}?${params.toString()}`);
  };

  const handleSearchType = useCallback(() => {
    const data = selectOptionsData.find(({ value }) => value === filterValues.key);
    if (data) {
      setKeySelected(data);
    }
  }, [filterValues.key]);

  useEffect(() => {
    handleSetFilterValues({
      key: selectOptionsData[0].value,
    });
  }, []);

  useEffect(() => {
    handlePage(1);
  }, [filterValues.term]);

  useEffect(() => {
    handleSearchType();
  }, [handleSearchType]);

  useEffect(() => {
    handleReplaceURL();
  }, [currentPage]);

  return (
    <section className={style.container}>
      <div className={style.containerAddFilter}>
        <Title section='Items' />
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
            <SortComponent isResponsive={false} />
            <SwitchComponent
              className={style.containerSwitch}
              size={SizeType.SMALL}
              color={SelectColorType.SECONDARY}
              defaultSelected
            >
              Active
            </SwitchComponent>
            <AddBtn linkButton={'items/create'} ariaLabelButton={t('addItem')} textButton={t('addItem')} />
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
      <NoEntitiesToDisplay data={items} section='Items' />
      {items.length > 0 && (
        <div className={style.cards}>
          {items.map((item) => (
            <CardEntity
              editPath={'items/update'}
              handleDelete={deleteItem}
              key={item.id}
              className={{
                card:
                  openDropdownId === item.id
                    ? `${styleCard.backgroundHover} ${styleCard.container}`
                    : styleCard.container,
                header: styleCard.containerHeader,
              }}
              radius={SizeType.SMALL}
              id={item.id}
              handleDropdown={() => handleDropdown(item.id)}
              isDropdownOpen={openDropdownId === item.id}
              item={
                <div className={styleCard.containerInfo}>
                  <h2 className='text-md'>Description: {item.description}</h2>
                  <h3 className={styleCard.name}>{item.name}</h3>
                  <p>$500.000</p>
                  <p>EXP: 25/12/2024</p>
                </div>
              }
            />
          ))}
        </div>
      )}
      <div className={style.containerPaginationAndAdd}>
        {items.length > 0 && (
          <div className={style.testNav}>
            <PaginationComponent
              onChange={handlePage}
              page={currentPage}
              total={pagination.lastPage}
              color={SelectColorType.SECONDARY}
            />
          </div>
        )}
      </div>
    </section>
  );
};
