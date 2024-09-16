import React from 'react';
import { PublicLayout } from '@/layout/public-layout/PublicLayout';
import { AuthWelcomeTemplate } from '@/features/auth/welcome/template/AuthWelcomeTemplate';

export default function Page() {
  return (
    <PublicLayout>
      <AuthWelcomeTemplate/>
    </PublicLayout>
  );
}
