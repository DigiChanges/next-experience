import React from 'react';

import { NavbarTop } from '@/features/navbar/organisms/NavbarTop';
import { handleGetFile } from '@/features/shared/actions/fileActions';
import { fetchUser } from '@/features/shared/actions/userActions';

type Props = {
  isPublic: boolean;
};

export const NavbarTopTemplate = async (props: Props) => {
  const user = props.isPublic ? undefined : await fetchUser();

  if (user) {
    const metadata = await handleGetFile(user.user_id.image_id);
    user.user_id.image_id = metadata.path;
  }

  return <NavbarTop isPublic={props.isPublic} user={user} />;
};
