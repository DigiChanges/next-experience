import React from 'react';

import { ForgoPasswordTemplate } from '@/features/auth/forgot-password/template/ForgoPasswordTemplate';
import { PublicLayout } from '@/layout/public-layout/PublicLayout';

export default function Page() {
  return (
    <PublicLayout>
      <ForgoPasswordTemplate />
    </PublicLayout>
  );
}
