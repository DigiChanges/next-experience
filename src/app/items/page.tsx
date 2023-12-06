import React, { Suspense } from 'react';
import Layout from '@/layout/Layout';
import { ItemsTemplate } from '@/features/items/template/ItemsTemplate';
import { LoaderStarsWars } from '@/features/shared/atoms/loader/LoaderStarsWars';

export default async function Page() {
  return (
    <Layout>
      <Suspense fallback={ <LoaderStarsWars/>}>
        <ItemsTemplate/>
      </Suspense>
    </Layout>
  );
}
