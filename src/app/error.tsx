'use client';
import React from 'react';

const ErrorHandler = ({ reset }: { error: Error, reset: () => void }) => {
  return (
    <div className={'text-white'}>
      <p>There was an error</p>
      <button onClick={reset} >Try again</button>
    </div>
  );
};

export default ErrorHandler;
