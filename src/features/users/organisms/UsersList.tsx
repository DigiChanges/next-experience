'use client';
import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { NoItemsToDisplay } from '@/features/items/atoms/noItems/NoItemsToDisplay';
import { Title } from '@/features/items/atoms/title/Title';
import styleCard from '@/features/items/organisms/card.module.css';
import { User } from '@/features/profile/actions/ProfileAction';
import { CardItem } from '@/features/shared/atoms/card/CardItem';
import { FilterModal } from '@/features/shared/atoms/filterModal/filterModal';
import { PaginationComponent } from '@/features/shared/atoms/pagination/Paginations';
import { SelectColorType } from '@/features/shared/atoms/select/SelectForm';
import { SizeType } from '@/features/shared/atoms/swich/switch';

import { useFilter } from '@/features/shared/hooks/useFilter';
import { PaginationAPI } from '@/features/shared/interfaces/PaginationAPI';
import { FiltersApplied } from '@/features/shared/molecules/filtersApplied/FiltersApplied';
import { FilterAndSearch } from '@/features/shared/organisms/filterAndSearch/FilterAndSearch';
import { usePagination } from '@/features/users/atoms/usePagination/usePagination';
import { OptionKey, selectOptionsData } from '@/features/users/constants/selectOptionsData';

import styles from './users.module.css';

interface Props {
  users: User[];
  pagination: PaginationAPI;
}

export const UserList = (props: Props) => {
  const [keySelected, setKeySelected] = useState<OptionKey>({ ...selectOptionsData[0] });
  const searchParams = useSearchParams();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const params = useMemo(() => new URLSearchParams(searchParams), [searchParams]);
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleReplaceURL = () => {
    replace(`${pathname}?${params.toString()}`);
  };

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

  const handleDropdown = (id: string) => {
    setOpenDropdownId(openDropdownId === id ? null : id);
  };

  useEffect(() => {
    handleSetFilterValues({
      key: selectOptionsData[0].value,
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
      <NoItemsToDisplay data={props.users} />
      {props.users && props.users.length > 0 && (
        <div className={styles.cards}>
          {props.users.map((user) => (
            <CardItem
              key={user.id}
              type='users'
              className={{
                card:
                  openDropdownId === user.id
                    ? `${styleCard.backgroundHover} ${styleCard.container}`
                    : styleCard.container,
                header: styleCard.containerHeader,
              }}
              radius={SizeType.SMALL}
              id={user.id}
              handleDropdown={() => handleDropdown(user.id)}
              isDropdownOpen={openDropdownId === user.id}
              item={
                <div className={styleCard.containerInfo}>
                  {user.first_name ? <h2 className={styleCard.name}>{user.first_name}</h2> : <></>}
                  <p className='text-md'>Email: {user.email}</p>
                  <p className='text-md'>Role: {user.role}</p>
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
