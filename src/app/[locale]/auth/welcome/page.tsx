import React from 'react';

import { AuthWelcomeTemplate } from '@/features/auth/welcome/template/AuthWelcomeTemplate';
import { PublicLayout } from '@/layout/public-layout/PublicLayout';

export default function Page() {
  return (
    <PublicLayout>
      <AuthWelcomeTemplate />
    </PublicLayout>
  );
}
