import React from 'react';
import { NavbarTop } from '@/features/navbar/organisms/NavbarTop';
interface Props {
  isPublic: boolean;
}

export const NavbarTopTemplate: React.FC<Props> = (props) => {
  return (
    <NavbarTop isPublic={props.isPublic} />
  );
};
