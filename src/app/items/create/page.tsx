import React from 'react';
import { CreateItemTemplate } from '@/features/items/template/createItem/CreateItemTemplate';
import { PrivateLayout } from '@/layout/private-layout/PrivateLayout';

export default function Page() {
  return (
    <PrivateLayout>
      <CreateItemTemplate/>
    </PrivateLayout>
  );
}
