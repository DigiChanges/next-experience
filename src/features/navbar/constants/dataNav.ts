import {icons} from "@/features/shared/hooks/icons";
import {images} from "@/features/shared/hooks/images";

const { HomeIcon, ItemsIcon, DashboardIcon , CloseIcon, IconUser, IconSettings, IconLogOut,IconDropdown} = icons();
const { BgUser }  = images();
export const dataClose = {
    image: CloseIcon
}
export const dataUser = {
    image: BgUser,
    username: 'babyoda@gmail.com',
    icon: IconDropdown
}
export const dataPerfil = [
    {
        icon: IconUser,
        description: 'Perfil',
        path: '#'
    },{
        icon: IconSettings,
        description: 'Settings',
        path: '#'
    }
]
export const dataLogin ={
    icon: IconLogOut
}

export const dataNav = [
    {
        image: DashboardIcon,
        description: 'Dashboard',
    },
    {
        image: HomeIcon,
        description: 'Home',
        path: '/'
    },
    {
        image: ItemsIcon,
        description: 'Items',
        path: '/items'
    }
]
