import React, { Suspense } from 'react';
import Layout from '@/layout/Layout';
import { UpdateItemTemplate } from '@/features/items/template/update/UpdateItemTemplate';
import { LoaderStarsWars } from '@/features/shared/atoms/loader/LoaderStarsWars';

type Props = {
    searchParams: { [key: string]: string };
};
export default function Page(props: Props) {
  const { id } = props.searchParams;

  return (
    <Layout>
      <Suspense fallback={<LoaderStarsWars/>}>
        <UpdateItemTemplate id={id} />
      </Suspense>
    </Layout>
  );
}
