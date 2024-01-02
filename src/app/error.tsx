'use client';
import React from 'react';
// TODO: Mejorar la vista
const error = ({ reset }: { error: Error, reset: () => void }) => {
  return <div className={'text-white'}>
    <p>There was an error</p>
    <button onClick={reset} >Try again</button></div>;
};

export default error;
