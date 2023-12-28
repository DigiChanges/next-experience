'use client';
import React from 'react';
import { PublicLayout } from '@/layout/public-layout/PublicLayout';
import { ForgoPasswordTemplate } from '@/features/auth/forgot-password/template/ForgoPasswordTemplate';

export default function Page() {
  return (
    <PublicLayout>
      <ForgoPasswordTemplate/>
    </PublicLayout>
  );
}
