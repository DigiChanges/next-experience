import React from 'react';

import { NavbarTop } from '@/features/navbar/organisms/NavbarTop';
import { fetchUser } from '@/features/shared/actions/fetchUsers';
import { supabaseServerClientManager } from '@/lib/SupabaseServerClientManager';

type Props = {
  isPublic: boolean;
};

export const NavbarTopTemplate = async (props: Props) => {
  const user = props.isPublic ? undefined : await fetchUser(supabaseServerClientManager.getServerPublicClient());

  return <NavbarTop isPublic={props.isPublic} user={user} />;
};
