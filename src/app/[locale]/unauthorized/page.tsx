'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const UnauthorizedPage = () => {
  const router = useRouter();
  const handleGoBack = () => {
    router.push('/dashboard');
  };

  return (
    <div className='flex min-h-screen flex-col items-center justify-center'>
      <div className='rounded-lg p-8 text-center shadow-lg'>
        <h1 className='mb-4 text-4xl font-bold text-red-600'>Acceso No Autorizado</h1>
        <p className='mb-6 text-xl text-gray-700'>Lo sentimos, no tienes permiso para acceder a esta página.</p>
        <button
          onClick={handleGoBack}
          className='rounded bg-blue-500 px-6 py-2 text-white transition-colors hover:bg-blue-600'
        >
          Volver
        </button>
      </div>
    </div>
  );
};

export default UnauthorizedPage;
