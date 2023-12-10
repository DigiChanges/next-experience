import React from 'react';
import Layout from '@/layout/Layout';
import { CreateItemTemplate } from '@/features/items/template/createItem/CreateItemTemplate';
export default function Page() {
  return (
    <Layout>
      <CreateItemTemplate/>
    </Layout>
  );
}
