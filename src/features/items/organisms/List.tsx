'use client';
import React, { useEffect, useState } from 'react';
import { CardItem } from '@/features/items/atoms/card/CardItem';
import style from './list.module.css';
import { AddItemBtn } from '../atoms/addItem/AddItemBtn';
import { ItemsResponse } from '@/features/items/interfaces/itemsResponse';
import { Pagination, Select, SelectItem } from '@nextui-org/react';
import { Input } from '@nextui-org/react';
import { SearchIcon } from '@nextui-org/shared-icons';
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
      <div className="flex flex-wrap items-center gap-4">
        <Pagination onChange={setCurrentPage} total={pagination.lastPage} initialPage={pagination.currentPage} color={'primary'} />
      </div>
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
                <div className="from-pink-500 to-yellow-500 flex h-[240px] w-[340px] items-center justify-center rounded-2xl bg-gradient-to-tr px-8 text-white shadow-lg">
                  <Input
                    onChange={(event) => setTerm(event.target.value)}
                    label="Search"
                    isClearable
                    radius="lg"
                    classNames={{
                      label: 'text-black/50 dark:text-white/90',
                      input: [
                        'bg-transparent',
                        'text-black/90 dark:text-white/90',
                        'placeholder:text-default-700/50 dark:placeholder:text-white/60'
                      ],
                      innerWrapper: 'bg-transparent',
                      inputWrapper: [
                        'shadow-xl',
                        'backdrop-blur-xl',
                        'backdrop-saturate-200',
                        'hover:bg-default-200/70',
                        'dark:hover:bg-default/70',
                        'group-data-[focused=true]:bg-default-200/50',
                        'dark:group-data-[focused=true]:bg-default/60',
                        '!cursor-text'
                      ]
                    }}
                    placeholder="Type to search..."
                    startContent={
                      <SearchIcon className="text-black/50 text-slate-400 pointer-events-none mb-0.5 shrink-0 dark:text-white/90" />
                    }
                  />
                </div>
        }

      </div>
      <AddItemBtn />
      <div className={style.cards}>
        {items.map((item) => (
          <CardItem key={item.id} name={item.name} type={item.type} id={item.id}/>
        ))}
      </div>
    </section>
  );
};
