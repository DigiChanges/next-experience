import React from 'react';
import Layout from '@/layout/Layout';
import { ItemsTemplate } from '@/features/items/template/ItemsTemplate';

export default async function Page() {
  return (
    <>
      <Layout>
        <ItemsTemplate />
      </Layout>
    </>
  );
}
