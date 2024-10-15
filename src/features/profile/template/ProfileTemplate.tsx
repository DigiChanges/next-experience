import React from 'react';

import { Profile } from '@/features/profile/organisms/profile';
import { fetchUser } from '@/features/shared/actions/fetchUsers';

export const ProfileTemplate = async () => {
  const user = await fetchUser();
  return <Profile userProfile={user} />;
};
