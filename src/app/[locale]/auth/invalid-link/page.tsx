import React from 'react';
import { PublicLayout } from '@/layout/public-layout/PublicLayout';
import { InvalidLinkTemplate } from '@/features/auth/invalid-link/template/InvalidLinkTemplate';

export default function Page() {
  return (
    <PublicLayout>
      <InvalidLinkTemplate/>
    </PublicLayout>
  );
}
