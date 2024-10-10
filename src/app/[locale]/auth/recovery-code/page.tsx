import React from 'react';

import { RecoveryCodeTemplate } from '@/features/auth/recovery-code/template/RecoveryCodeTemplate';
import { PublicLayout } from '@/layout/public-layout/PublicLayout';

export default function Page() {
  return (
    <PublicLayout>
      <RecoveryCodeTemplate />
    </PublicLayout>
  );
}
