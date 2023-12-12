import React, { Suspense } from 'react';
import { ItemsTemplate } from '@/features/items/template/ItemsTemplate';
import { LoaderStarsWars } from '@/features/shared/atoms/loader/LoaderStarsWars';
import { PrivateLayout } from '@/layout/private-layout/PrivateLayout';
import { useFilter } from '@/features/shared/hooks/useFilter';
import { usePagination } from '@/features/shared/hooks/usePagination';
import { paginationInitialParams } from '@/features/items/constants/paginationInitialParams';

type Props = {
    searchParams: { readonly [key: string]: string };
};

export default async function Page(props: Props) {
  const params = new URLSearchParams(props.searchParams);

  const { setInitialPaginationParams } = usePagination();
  const { setInitialFilterParams } = useFilter();

  setInitialPaginationParams(params, paginationInitialParams);
  const newFilter = setInitialFilterParams(params);

  return (
    <PrivateLayout>
      <Suspense fallback={<LoaderStarsWars/>}>
        <ItemsTemplate queryParams={newFilter}/>
      </Suspense>
    </PrivateLayout>
  );
}


