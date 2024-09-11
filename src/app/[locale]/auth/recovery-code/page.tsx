'use client';
import React from 'react';
import { PublicLayout } from '@/layout/public-layout/PublicLayout';
import { RecoveryCodeTemplate } from '@/features/auth/recovery-code/template/RecoveryCodeTemplate';

export default function Page() {
  return (
    <PublicLayout>
      <RecoveryCodeTemplate/>
    </PublicLayout>
  );
}
