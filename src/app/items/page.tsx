import React, { Suspense } from 'react';
import { ItemsTemplate } from '@/features/items/template/ItemsTemplate';
import { LoaderStarsWars } from '@/features/shared/atoms/loader/LoaderStarsWars';
import { PrivateLayout } from '@/layout/private-layout/PrivateLayout';

export default async function Page() {
  return (
    <PrivateLayout>
      <Suspense fallback={<LoaderStarsWars/>}>
        <ItemsTemplate/>
      </Suspense>
    </PrivateLayout>
  );
}
