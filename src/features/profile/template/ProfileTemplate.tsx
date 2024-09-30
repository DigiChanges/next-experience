import React from 'react';
import { Profile } from '@/features/profile/organisms/profile';
import { getUser } from '@/features/profile/actions/ProfileAction';

export const ProfileTemplate = async() => {
  const user = await getUser();
  return (
    <Profile userProfile={user} />
  );
};
