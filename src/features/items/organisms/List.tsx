'use client';
import React, { useRef } from 'react';
import { CardItem } from '@/features/items/atoms/card/CardItem';
import style from './list.module.css';
import { AddItemBtn } from '../atoms/addItem/AddItemBtn';
import { ItemsResponse } from '@/features/items/interfaces/itemsResponse';
import { Button, Pagination, Input  } from '@nextui-org/react';
import { usePagination } from '@/features/shared/hooks/usePagination';
import { useFilter } from '@/features/shared/hooks/useFilter';
import { PaginationAPI } from '@/features/shared/interfaces/PaginationAPI';
import { InputFilter } from '@/features/shared/molecules/inputFilter/InputFilter';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { icons } from '@/features/shared/hooks/icons';

interface Props {
    items: ItemsResponse[]
    pagination: PaginationAPI;
}

const filter = [
  {
    label: 'Name',
    value: 'Name'

  },
  {
    label: 'Type',
    value: 'Type'
  }
];

export const List: React.FC<Props> = ({ items, pagination }) => {
  const inputRef = useRef<any>();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const { iconCloseFilter } = icons();
  const { handlePage, currentPage } = usePagination(pagination, params);
  const { handleSetTerm, handleSetKey, filtersApplied, handleRemoveFilter } = useFilter(params);

  return (
    <section className={style.container}>
      <div className={style.containerAddFilter}>
        <div className={style.subcontainer}>
          <div className={style.title}>
            <h1>Section Items</h1>
            <span/>
          </div>
          <div className={style.containerSelect}>
            <div className={style.containerInputFilter}>
              <InputFilter data={filter} setValue={handleSetKey}/>
            </div>
            <div className={style.containerInput}>
              <div className={style.input}>
                <Input
                  labelPlacement={'outside'}
                  ref={inputRef}
                  label="Search"
                  classNames={{
                    input: ['bg-default'],
                    inputWrapper: [style.inputWrapper]
                  }}
                />
              </div>
              <div className={style.btn}>
                <Button onClick={() => {
                  handlePage(1);
                  handleSetTerm(inputRef.current.value);
                  inputRef.current.value = '';
                }}>Filter</Button>
              </div>
            </div>
          </div>
        </div>

        <div className={style.test}>
          <div className={style.containerFiltersApplied}>
            {
              filtersApplied.map((el) =>
                <li key={el.key} className={style.liRemove}>{
                  el.key}
                <button className={style.btnRemove} onClick={() => handleRemoveFilter(el)} >
                  <Image src={iconCloseFilter.src} alt={'button close'} width={50} height={50}/>
                </button>
                </li>)
            }
          </div>
          <AddItemBtn/>
        </div>


      </div>
      <div className={style.cards}>
        {items.map((item) => (
          <CardItem key={item.id} name={item.name} type={item.type} id={item.id}/>
        ))}
      </div>
      <div className={style.containerPagination}>
        <Pagination onChange={handlePage} page={currentPage} total={pagination.lastPage}
          color={'secondary'}/>
      </div>
    </section>
  );
};
