import React from 'react';

import { ExpiredLinkTemplate } from '@/features/auth/expired-link/template/ExpiredLinkTemplate';
import { PublicLayout } from '@/layout/public-layout/PublicLayout';

export default function Page() {
  return (
    <PublicLayout>
      <ExpiredLinkTemplate />
    </PublicLayout>
  );
}
