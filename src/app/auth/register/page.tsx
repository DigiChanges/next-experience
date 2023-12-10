import React from 'react';
import { RegisterTemplate } from '@/features/auth/register/template/RegisterTempalte';
import { PublicLayout } from '@/layout/public-layout/PublicLayout';

export default function Page() {
  return (
    <PublicLayout>
      <RegisterTemplate/>
    </PublicLayout>
  );
}
