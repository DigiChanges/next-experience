import React from 'react';
import WelcomeTemplate from '@/features/welcome/template/WelcomeTemplate';
import { PrivateLayout } from '@/layout/private-layout/PrivateLayout';
import {unstable_setRequestLocale} from "next-intl/server";

export default function Page() {

  return (
    <PrivateLayout>
      <WelcomeTemplate />
    </PrivateLayout>
  );
}
