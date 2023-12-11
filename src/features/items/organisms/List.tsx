'use client';
import React, { useEffect, useState } from 'react';
import { CardItem } from '@/features/items/atoms/card/CardItem';
import style from './list.module.css';
import { AddItemBtn } from '../atoms/addItem/AddItemBtn';
import { ItemsResponse } from '@/features/items/interfaces/itemsResponse';
import { Pagination, Select, SelectItem } from '@nextui-org/react';
import { Input } from '@nextui-org/react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { usePagination } from '@/features/shared/hooks/usePagination';
import { useFilter } from '@/features/shared/hooks/useFilter';


interface Props {
    items: ItemsResponse[]
    pagination: any;
}

const filter = [
  {
    label: 'Name',
    value: 'name'
  },
  {
    label: 'Type',
    value: 'type'
  }
];

export const List: React.FC<Props> = ({ items, pagination }) => {
  const [currentPage, setCurrentPage] = useState<number>(pagination.currentPage);
  const [key, setKey] = useState<string>('');
  const [term, setTerm] = useState<string>('');
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const { setPaginationParams } = usePagination();
  const { setFilterParams } = useFilter();

  const pathname = usePathname();
  const { replace } = useRouter();


  useEffect(() => {
    setPaginationParams(currentPage, pagination, params, pathname, replace);
  }, [currentPage]);

  useEffect(() => {
    setFilterParams(key, term, searchParams, pathname, replace);
  }, [term]);


  return (

    <section>
      <div className={style.containerAddFilter}>
        <div className="mb-6 flex w-full flex-wrap items-end gap-4 md:mb-0 md:flex-nowrap">
          <Select
            labelPlacement={'outside'}
            label="Select Filter"
            className="max-w-xs"
          >
            {filter.map((animal) => {
              return (
                <SelectItem

                  onClick={() => setKey(animal.value)}
                  key={animal.value}
                  value={animal.value}>
                  {animal.label}
                </SelectItem>
              );
            })}
          </Select>
          {
            key &&
                      <div
                        color={'default'}>
                        <Input  onChange={(event) => setTerm(event.target.value)}
                          type="email" label="Email" />
                      </div>
          }
        </div>
        <AddItemBtn/>
      </div>

      <div className={style.cards}>
        {items.map((item) => (
          <CardItem key={item.id} name={item.name} type={item.type} id={item.id}/>
        ))}
      </div>
      <div className={style.containerPagination}>
        <Pagination onChange={setCurrentPage} total={pagination.lastPage} initialPage={pagination.currentPage}
          color={'secondary'}/>
      </div>
    </section>
  );
};
