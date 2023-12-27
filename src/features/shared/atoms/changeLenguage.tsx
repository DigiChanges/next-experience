import React from 'react';
import { locales } from '../../../config';
import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { useSearchParams } from 'next/navigation';


export function ChangeLenguage() {
  const { Link, usePathname } = createSharedPathnamesNavigation({ locales });
  const pathName = usePathname();
  const params = useSearchParams();
  const paramsString = new URLSearchParams(params).toString();

  return (
    <div className={'mt-2 p-1'}>
      <Link className={'ml-1 rounded bg-secondary p-1 text-white'} href={`${pathName}?${paramsString}`} locale={'es'}>ES</Link>
      <Link className={'ml-1 rounded bg-secondary p-1 text-white'} href={`${pathName}?${paramsString}`} locale={'en'}>EN</Link>
    </div>
  );
}
