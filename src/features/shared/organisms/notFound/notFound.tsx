import React from 'react';
import style from './notFound.module.css';

export const NotFoundComponent = () => {
  return (
    <div className={style.container}>
      <h1>404</h1>
      <h2>Page not found</h2>
      <a href="/dashboard">Return to main page</a>
    </div>
  );
};
