import React from 'react';
import { locales } from '../../../config';
import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { useSearchParams } from 'next/navigation';
import { Dropdown, DropdownTrigger, Button, DropdownMenu, DropdownItem } from '@nextui-org/react';


export function ChangeLenguage() {
  const { Link, usePathname } = createSharedPathnamesNavigation({ locales });
  const pathName = usePathname();

  const params = useSearchParams();
  const paramsString = new URLSearchParams(params).toString();

  return (
    <Dropdown className={'p-1'}>
      <DropdownTrigger>
        <Button>lang</Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="es">
          <Link className={'ml-1 rounded bg-secondary p-1 text-white'} href={`${pathName}?${paramsString}`} locale={'es'}>ES</Link>
        </DropdownItem>
        <DropdownItem key="en">
          <Link className={'ml-1 rounded bg-secondary p-1 text-white'} href={`${pathName}?${paramsString}`} locale={'en'}>EN</Link>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
