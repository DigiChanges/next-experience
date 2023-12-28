'use client';
import React from 'react';
import { PublicLayout } from '@/layout/public-layout/PublicLayout';

import { UpdatePasswordTemplate } from '@/features/auth/update-password/template/updatePasswordTemplate';

export default function Page() {
  return (
    <PublicLayout>
      <UpdatePasswordTemplate/>
    </PublicLayout>
  );
}
