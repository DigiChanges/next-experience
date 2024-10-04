import React from 'react';
import { NavbarTop } from '@/features/navbar/organisms/NavbarTop';
import { getUser } from '@/features/profile/actions/ProfileAction';

type Props = {
  isPublic: boolean;
}

export const NavbarTopTemplate = async(props: Props) => {
  const user = await getUser();
  return (
    <NavbarTop isPublic={props.isPublic} user={user} />
  );
};
