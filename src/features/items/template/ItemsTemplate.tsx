import React, { Suspense } from 'react';
import { List } from '@/features/items/organisms/List';
import { LoaderStarsWars } from '@/features/shared/atoms/loader/LoaderStarsWars';


export const ItemsTemplate: React.FC = () => {
  return (
    <Suspense fallback={ <LoaderStarsWars/>}>
      <List />
    </Suspense>
  );
};
