'use client';
import React, { useEffect, useRef, useState } from 'react';
import { CardItem } from '@/features/items/atoms/card/CardItem';
import style from './list.module.css';
import { AddItemBtn } from '../atoms/addItem/AddItemBtn';
import { ItemsResponse } from '@/features/items/interfaces/itemsResponse';
import { Button, Pagination } from '@nextui-org/react';
import { Input } from '@nextui-org/react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { usePagination } from '@/features/shared/hooks/usePagination';
import { useFilter } from '@/features/shared/hooks/useFilter';
import { PaginationAPI } from '@/features/shared/interfaces/PaginationAPI';
import { InputFilter } from '@/features/shared/molecules/inputFilter/InputFilter';

interface Props {
  items: ItemsResponse[]
  pagination: PaginationAPI;
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
  const inputRef = useRef<any>();
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
    setFilterParams(key, term, searchParams, pathname, replace, params);
    setPaginationParams(currentPage, pagination, params, pathname, replace);

  }, [term, currentPage]);

  const handleFilter = () => {
    const inputElement = inputRef.current;

    if (inputElement && inputElement.value.length > 0) {
      setCurrentPage(1);
      setTerm(inputElement.value);

    }
  };
  const handleRemoveFilter = () => {


    setFilterParams('', '', searchParams, pathname, replace, params)

    setKey('');
    setTerm('');

  };

  return (
    <section className={style.container}>


      <div className={style.containerAddFilter}>


        <div className={style.subcontainer}>

          <div className={style.title}>
            <h1>Section Items</h1>
            <span></span>
          </div>

          <div className={style.containerSelect}>
            <div className={style.containerInputFilter}>
              <InputFilter data={filter} setValue={setKey}/>
            </div>

            <div className={style.containerInput}>
              <div className={style.input}>
                <Input
                    labelPlacement={'outside'}
                    ref={inputRef}
                    label="Email"
                    classNames={{
                      input: [
                        'bg-default'
                      ],
                      inputWrapper: [
                        'bg-default',

                        'dark:hover:bg-default'
                      ]
                    }}
                />

              </div>
              <div className={style.btn}>
                <Button onClick={handleFilter}>Filter</Button>
              </div>

            </div>
          </div>


        </div>


        <div className={'text-white'}>
          <h3>Filter applied: </h3>

          <button onClick={handleRemoveFilter}>Remove filter</button>
        </div>


        <AddItemBtn/>

      </div>
      <div className={style.cards}>
        {items.map((item) => (
            <CardItem key={item.id} name={item.name} type={item.type} id={item.id}/>
        ))}
      </div>
      <div className={style.containerPagination}>
        <Pagination onChange={setCurrentPage} page={currentPage} total={pagination.lastPage}
                    color={'secondary'}/>
      </div>
    </section>
  );
};
