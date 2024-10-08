import React from 'react';
import { NavbarTop } from '@/features/navbar/organisms/NavbarTop';

type Props = {
  isPublic: boolean;
}

export const NavbarTopTemplate = (props: Props) => {
  return (
    <NavbarTop isPublic={props.isPublic} />
  );
};
