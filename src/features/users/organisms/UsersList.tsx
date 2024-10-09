'use client';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import styles from './users.module.css';
import { useTranslations } from 'next-intl';
import { User } from '@/features/profile/actions/ProfileAction';
import { PaginationComponent } from '@/features/shared/atoms/pagination/Paginations';
import { SelectColorType } from '@/features/shared/atoms/select/SelectForm';
import { Title } from '@/features/items/atoms/title/Title';
import { FilterAndSearch } from '@/features/shared/organisms/filterAndSearch/FilterAndSearch';
import { OptionKey, selectOptionsData } from '@/features/items/constants/selectOptionsData';
import { FiltersApplied } from '@/features/shared/molecules/filtersApplied/FiltersApplied';
import { SortComponent } from '@/features/shared/atoms/sort/Sort';
import { SizeType, SwitchComponent } from '@/features/shared/atoms/swich/switch';
import { AddItemBtn } from '@/features/items/atoms/addItem/AddItemBtn';
import { FilterModal } from '@/features/shared/atoms/filterModal/filterModal';
import { NoItemsToDisplay } from '@/features/items/atoms/noItems/NoItemsToDisplay';
import { CardItem } from '@/features/shared/atoms/card/CardItem';
import styleCard from '@/features/items/organisms/card.module.css';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { usePagination, useUserPagination } from '@/features/shared/hooks/usePagination';
import { useFilter } from '@/features/shared/hooks/useFilter';

interface Props {
  users: User[];
  pagination: {
    currentPage: number,
    totalPages: number,
    totalCount: number
  };
}

export const UserList = (props: Props) => {
  const [keySelected, setKeySelected] = useState<OptionKey>({ ...selectOptionsData[0] });
  const searchParams = useSearchParams();
  const params = useMemo(() => new URLSearchParams(searchParams), [searchParams]);
  const pathname = usePathname();
  const { replace } = useRouter();
  const { handlePage, currentPage } = useUserPagination(props.pagination);
  const { handleSetFilterValues, filterValues, filtersApplied, handleRemoveFilter, handleSetFiltersApplied, handleRemoveFilterAll } = useFilter(params);
  const t = useTranslations('UserList');

  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);

  const handleDropdown = (id: string) => {
    setOpenDropdownId(openDropdownId === id ? null : id);
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

  useEffect(() => {
    if (props.users.length === 0) {
      handlePage(1);
    }
  }, [handlePage, props.users]);
  useEffect(() => {
    console.log(props);
  }, []);

  return (
    <div className={styles.container}>
      <section className={styles.container}>
        <div className={styles.containerAddFilter}>
          <Title section='UserList'/>
          <p className={styles.subtitle}>Users</p>
          <div className={styles.subcontainerAddFilter}>
            <div className={styles.subcontainerAddFilter2}>
              { /* filters */}
            </div>
            <div className={styles.containerAddItem}>
              { /* filters applied */}
            </div>
          </div>
          <div className={styles.containerAddItemBtnAndModal}>
            <div className={styles.containerAddItemBtn}>
              <SortComponent isResponsive={false}/>
              <SwitchComponent className={styles.containerSwitch} size={SizeType.SMALL} color={SelectColorType.SECONDARY}
                defaultSelected>
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
        <NoItemsToDisplay data={props.users}/>
        {props.users.length > 0 && (
          <div className={styles.cards}>
            {props.users.map((user) => (
              <CardItem
                key={user.id}
                type='users'
                className={{
                  card: openDropdownId === user.id ? `${styleCard.backgroundHover} ${styleCard.container}` : styleCard.container,
                  header: styleCard.containerHeader
                }}
                radius={SizeType.SMALL}
                id={user.id}
                handleDropdown={() => handleDropdown(user.id)}
                isDropdownOpen={openDropdownId === user.id}
                item={
                  <div className={styleCard.containerInfo}>
                    {user.first_name ? <h2 className={styleCard.name}>{user.first_name}</h2> : <></>}
                    <p className="text-md">{user.email}</p>
                    <p className="text-md">{user.role}</p>
                  </div>
                }
              />
            ))}
          </div>
        )}
        <div className={styles.containerPaginationAndAdd}>
          {props.users.length > 0 &&
            <div className={styles.testNav}>
              <PaginationComponent onChange={handlePage} page={currentPage} total={props.pagination.totalPages}
                color={SelectColorType.SECONDARY}/>
            </div>
          }
        </div>
      </section>
    </div>);
};
