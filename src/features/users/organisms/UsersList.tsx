'use client';
import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { useTranslations } from 'next-intl';

import styleCard from '@/features/items/organisms/card.module.css';
import { AddBtn } from '@/features/shared/atoms/addBtn/AddBtn';
import { CardEntity } from '@/features/shared/atoms/card/CardEntity';
import { FilterModal } from '@/features/shared/atoms/filterModal/filterModal';
import { NoEntitiesToDisplay } from '@/features/shared/atoms/noEntitiesToDisplay/NoEntitiesToDisplay';
import { PaginationComponent } from '@/features/shared/atoms/pagination/Paginations';
import { SelectColorType } from '@/features/shared/atoms/select/SelectForm';
import { SizeType } from '@/features/shared/atoms/swich/switch';
import { Title } from '@/features/shared/atoms/title/Title';

import { useFilter } from '@/features/shared/hooks/useFilter';
import { PaginationAPI } from '@/features/shared/interfaces/PaginationAPI';
import { UserHasRole } from '@/features/shared/interfaces/UserHasRole';
import { FiltersApplied } from '@/features/shared/molecules/filtersApplied/FiltersApplied';
import { FilterAndSearch } from '@/features/shared/organisms/filterAndSearch/FilterAndSearch';
import { usePagination } from '@/features/users/atoms/usePagination/usePagination';

import { selectOptionsData } from '@/features/users/constants/selectOptionsData';
import { OptionKey } from '@/features/users/interfaces/OptionKey';

import styles from './users-list.module.css';

interface Props {
  users: UserHasRole[];
  pagination: PaginationAPI;
}

export const UserList = (props: Props) => {
  const t = useTranslations('UserList');
  const [keySelected, setKeySelected] = useState<OptionKey>({ ...selectOptionsData[0] });
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const params = useMemo(() => {
    const newParams = new URLSearchParams();

    const entriesArray = Array.from(searchParams.entries());
    for (const [key, value] of entriesArray) {
      newParams.append(key, value);
    }

    return newParams;
  }, [searchParams]);
  const { handlePage, currentPage } = usePagination(props.pagination, params);
  const {
    handleSetFilterValues,
    filterValues,
    filtersApplied,
    handleRemoveFilter,
    handleSetFiltersApplied,
    handleRemoveFilterAll,
  } = useFilter(params);

  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);

  const handleReplaceURL = () => {
    replace(`${pathname}?${params.toString()}`);
  };

  const handleSearchType = useCallback(() => {
    const data = selectOptionsData.find(({ value }) => value === filterValues.key);
    if (data) {
      setKeySelected(data);
    }
  }, [filterValues.key]);

  const handleDropdown = (id: string) => {
    setOpenDropdownId(openDropdownId === id ? null : id);
  };

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
    if (props.users.length === 0) {
      handlePage(1);
    }
  }, [handlePage, props.users]);

  return (
    <section className={styles.container}>
      <div className={styles.containerAddFilter}>
        <Title section='UserList' />
        <p className={styles.subtitle}>Users</p>
        <div className={styles.subcontainerAddFilter}>
          <div className={styles.subcontainerAddFilter2}>
            <FilterAndSearch
              handleSetFiltersApplied={handleSetFiltersApplied}
              handleSetFilterValues={handleSetFilterValues}
              keySelected={keySelected}
              handleReplace={handleReplaceURL}
              inputFilterData={selectOptionsData}
            />
          </div>
          <div className={styles.containerAddItem}>
            <AddBtn linkButton={'users/create'} ariaLabelButton={t('addItem')} textButton={t('addItem')} />
            <FiltersApplied
              filtersApplied={filtersApplied}
              handleReplaceURL={handleReplaceURL}
              handleRemoveFilter={handleRemoveFilter}
              handleRemoveFilterAll={handleRemoveFilterAll}
            />
          </div>
        </div>
        <div className={styles.containerAddItemBtnAndModal}>
          <div className={styles.containerAddItemBtn}></div>
          <FilterModal
            type='UserList'
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
      <NoEntitiesToDisplay data={props.users} section='UserList' />
      {props.users && props.users.length > 0 && (
        <div className={styles.cards}>
          {props.users.map((user) => (
            <CardEntity
              editPath={'users/update'}
              // @ts-expect-error test
              handleDelete={() => fetch('')}
              key={user.user_id.id}
              className={{
                card:
                  openDropdownId === user.user_id.id
                    ? `${styleCard.backgroundHover} ${styleCard.container}`
                    : styleCard.container,
                header: styleCard.containerHeader,
              }}
              radius={SizeType.SMALL}
              id={user.user_id.id}
              handleDropdown={() => handleDropdown(user.user_id.id)}
              isDropdownOpen={openDropdownId === user.user_id.id}
              item={
                <div className={styleCard.containerInfo}>
                  {user.user_id.first_name ? <h2 className={styleCard.name}>{user.user_id.first_name}</h2> : <></>}
                  <p className='text-md'>Email: {user.user_id.email}</p>
                  <p className='text-md'>Role: {user.role_id.name}</p>
                </div>
              }
            />
          ))}
        </div>
      )}
      <div className={styles.containerPaginationAndAdd}>
        {props.users && props.users.length > 0 && (
          <div className={styles.testNav}>
            <PaginationComponent
              onChange={handlePage}
              page={currentPage}
              total={props.pagination?.lastPage}
              color={SelectColorType.SECONDARY}
            />
          </div>
        )}
      </div>
    </section>
  );
};
