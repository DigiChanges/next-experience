import React from 'react';

import { InvalidLinkTemplate } from '@/features/auth/invalid-link/template/InvalidLinkTemplate';
import { PublicLayout } from '@/layout/public-layout/PublicLayout';

export default function Page() {
  return (
    <PublicLayout>
      <InvalidLinkTemplate />
    </PublicLayout>
  );
}
