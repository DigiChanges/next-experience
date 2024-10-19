import React from 'react';

import { Profile } from '@/features/profile/organisms/profile';
import { handleGetFile } from '@/features/shared/actions/fileActions';
import { fetchUser } from '@/features/shared/actions/userActions';

export const ProfileTemplate = async () => {
  const user = await fetchUser();

  if (user) {
    const metadata = await handleGetFile(user.user_id.image_id);
    user.user_id.image_id = metadata.path;
  }

  return <Profile userProfile={user} />;
};
