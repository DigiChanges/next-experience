import React from 'react';
import { PublicLayout } from '@/layout/public-layout/PublicLayout';
import { ExpiredLinkTemplate } from '@/features/auth/expired-link/template/ExpiredLinkTemplate';

export default function Page() {
  return (
    <PublicLayout>
      <ExpiredLinkTemplate/>
    </PublicLayout>
  );
}
