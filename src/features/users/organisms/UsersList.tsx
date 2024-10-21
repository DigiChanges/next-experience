'use client';
import React from 'react';

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

import { useFilterAndPagination } from '@/features/shared/hooks/useFilterAndPagination';
import { UserHasRole } from '@/features/shared/interfaces/UserHasRole';
import { FiltersApplied } from '@/features/shared/molecules/filtersApplied/FiltersApplied';
import { FilterAndSearch } from '@/features/shared/organisms/filterAndSearch/FilterAndSearch';

import { selectOptionsData } from '@/features/users/constants/selectOptionsData';

import styles from './users-list.module.css';

interface Props {
  users: UserHasRole[];
  pagination: any;
}

export const UserList = (props: Props) => {
  const t = useTranslations('UserList');
  const {
    handlePage,
    currentPage,
    handleRemoveFilter,
    handleSetFiltersApplied,
    handleRemoveFilterAll,
    filtersApplied,
    handleDropdown,
    openDropdownId,
    keySelected,
    handleSetFilterValues,
    handleReplaceURL,
  } = useFilterAndPagination(selectOptionsData, props.pagination);

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
