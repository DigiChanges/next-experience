import React from 'react';

import { getUser } from '@/features/profile/actions/ProfileAction';
import { Profile } from '@/features/profile/organisms/profile';

export const ProfileTemplate = async () => {
  const user = await getUser();
  return <Profile userProfile={user} />;
};
