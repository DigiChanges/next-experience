import React from 'react';

import { Profile } from '@/features/profile/organisms/profile';
import { fetchUser } from '@/features/shared/actions/fetchUsers';
import { supabaseServerClientManager } from '@/lib/SupabaseServerClientManager';

export const ProfileTemplate = async () => {
  const user = await fetchUser(supabaseServerClientManager.getServerPublicClient());
  return <Profile userProfile={user} />;
};
