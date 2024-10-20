import { icons } from '@/features/shared/hooks/icons';
import { images } from '@/features/shared/hooks/images';

const { HomeIcon, ItemsIcon, CloseIcon, IconSettings, IconLogOut, IconDropdown, UsersIcon } = icons();
const { Avatar } = images();

export const dataClose = {
  image: CloseIcon,
};
export const dataUser = {
  image: Avatar,
  username: 'babyoda@gmail.com',
  icon: IconDropdown,
};
export const dataPerfil = [
  {
    description: 'perfil',
    path: '/profile',
  },
  {
    icon: IconSettings,
    description: 'settings',
    path: '/settings',
  },
];
export const dataLogin = {
  icon: IconLogOut,
};

export const dataNav = [
  {
    id: 1,
    image: HomeIcon,
    description: 'dashboard',
    path: '/dashboard',
  },
  {
    id: 2,
    image: ItemsIcon,
    description: 'items',
    path: '/items',
  },
  {
    id: 3,
    image: UsersIcon,
    description: 'users',
    path: '/users',
  },
];
