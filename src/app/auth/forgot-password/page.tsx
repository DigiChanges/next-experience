'use client';
import React from 'react';
import { PublicLayout } from '@/layout/public-layout/PublicLayout';
import { ForgoPasswordTemplate } from '@/features/auth/forgot-password/template/ForgoPasswordTemplate';

export default function Page() {
  // const searchParams = useSearchParams();
  // const code = searchParams.get('code');

  return (
    <PublicLayout>
      <ForgoPasswordTemplate/>
      {/* <>input para poner el email, despues te ponga el mensaje</>*/}
    </PublicLayout>
  );
}
