import { icons } from '@/features/shared/hooks/icons';
import { images } from '@/features/shared/hooks/images';

const { HomeIcon, ItemsIcon, DashboardIcon, CloseIcon, IconUser, IconSettings, IconLogOut, IconDropdown } = icons();
const { BgUser }  = images();

export const dataClose = {
  image: CloseIcon
};
export const dataUser = {
  image: BgUser,
  username: 'babyoda@gmail.com',
  icon: IconDropdown
};
export const dataPerfil = [
  {
    icon: IconUser,
    description: 'perfil',
    path: '#'
  }, {
    icon: IconSettings,
    description: 'settings',
    path: '#'
  }
];
export const dataLogin = {
  icon: IconLogOut
};

export const dataNav = [
  {
    image: DashboardIcon,
    description: 'dashboard'
  },
  {
    image: HomeIcon,
    description: 'home',
    path: '/dashboard'
  },
  {
    image: ItemsIcon,
    description: 'items',
    path: '/items'
  }
];
