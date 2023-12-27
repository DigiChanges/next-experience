import React from 'react';
import WelcomeTemplate from '@/features/welcome/template/WelcomeTemplate';
import { PrivateLayout } from '@/layout/private-layout/PrivateLayout';

export default function Page() {

  return (
    <PrivateLayout>
      <WelcomeTemplate />
    </PrivateLayout>
  );
}
