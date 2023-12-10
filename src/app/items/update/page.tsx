import React, { Suspense } from 'react';
import { UpdateItemTemplate } from '@/features/items/template/update/UpdateItemTemplate';
import { LoaderStarsWars } from '@/features/shared/atoms/loader/LoaderStarsWars';

type Props = {
    searchParams: { readonly [key: string]: string };
};
export default function Page(props: Readonly<Props>) {
  const { id } = props.searchParams;

  return (

    <Suspense fallback={<LoaderStarsWars/>}>
      <UpdateItemTemplate id={id} />
    </Suspense>

  );
}
