import React from 'react';

import { ProfileTemplate } from '@/features/profile/template/ProfileTemplate';
import { PrivateLayout } from '@/layout/private-layout/PrivateLayout';

export default function Page() {
  return (
    <PrivateLayout>
      <ProfileTemplate />
    </PrivateLayout>
  );
}
