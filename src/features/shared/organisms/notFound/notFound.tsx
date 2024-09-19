import React from 'react';
import style from './not-found.module.css';

export const NotFoundComponent = () => {
  return (
    <div className={style.container}>
      <h1>404</h1>
      <h2>Page not found</h2>
      <a href="/dashboard">Return to main page</a>
    </div>
  );
};
