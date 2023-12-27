'use client';
import React from 'react';
import { PublicLayout } from '@/layout/public-layout/PublicLayout';
import { handleUpdatePassword } from '@/features/auth/update-password/actions/updatePasswordAction';
import { useSearchParams } from 'next/navigation';

export default function Page() {
  const searchParams = useSearchParams();
  const code = searchParams.get('code');

  return (
    <PublicLayout>

      {/* aca va el form que passaword y new password , y llama la funcion*/}
      <div className={'text-large text-white'} onClick={() => handleUpdatePassword('1234567899', code ? code : '')}>clikea aca</div>
    </PublicLayout>
  );
}
