import React, { Suspense } from 'react';
import { ItemsTemplate } from '@/features/items/template/ItemsTemplate';
import { LoaderStarsWars } from '@/features/shared/atoms/loader/LoaderStarsWars';

export const revalidate = 0;
export default async function Page() {
  return (

    <Suspense fallback={ <LoaderStarsWars/>}>
      <ItemsTemplate/>
    </Suspense>

  );
}
