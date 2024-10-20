'use client';

import React, { createContext, useState, useContext } from 'react';
import { StaticImageData } from 'next/image';

import { images } from '@/features/shared/hooks/images';

interface UserContextType {
  avatar: StaticImageData | string;
  handleSetAvatar: (avatar: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const { Avatar } = images();
  const [avatar, setUserAvatar] = useState<StaticImageData | string>(Avatar);

  const handleSetAvatar = (avatar: string): void => {
    setUserAvatar(avatar);
  };

  return <UserContext.Provider value={{ avatar, handleSetAvatar }}>{children}</UserContext.Provider>;
}

export function useContextUser() {
  const context = useContext(UserContext);

  if (!context) throw new Error('Context not defined');

  return context;
}
