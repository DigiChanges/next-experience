'use client';
import React from 'react';
import { NextPageContext } from 'next';

type Props = {
  statusCode?: number;
};
function ErrorHandler({ statusCode }: Props) {
  return <p>{statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}</p>;
}

ErrorHandler.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorHandler;
