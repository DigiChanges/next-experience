import React from 'react';
import { LoginTemplate } from '@/features/auth/login/template/LoginTemplate';
import { PublicLayout } from '@/layout/public-layout/PublicLayout';

export default function Page() {
  return (
    <PublicLayout>
      <LoginTemplate/>
    </PublicLayout>
  );
}
