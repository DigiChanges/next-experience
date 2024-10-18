'use client';
import React from 'react';

import { UpdatePasswordTemplate } from '@/features/auth/update-password/template/updatePasswordTemplate';
import { PublicLayout } from '@/layout/public-layout/PublicLayout';

export default function Page() {
  return (
    <PublicLayout>
      <UpdatePasswordTemplate />
    </PublicLayout>
  );
}
