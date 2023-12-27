import React from 'react';
import { CreateItemTemplate } from '@/features/items/template/createItem/CreateItemTemplate';
import { PrivateLayout } from '@/layout/private-layout/PrivateLayout';
import {unstable_setRequestLocale} from "next-intl/server";

type Props = {
    params: {locale: string};
};

export default function Page({ params: { locale } }: Props){
    unstable_setRequestLocale(locale);
  return (
    <PrivateLayout>
      <CreateItemTemplate/>
    </PrivateLayout>
  );
}
