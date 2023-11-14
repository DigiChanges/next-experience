import {icons} from "@/features/shared/hooks/icons";
import {images} from "@/features/shared/hooks/images";

const { HomeIcon, ItemsIcon, DashboardIcon , CloseIcon} = icons();
const { BgUser }  = images();
export const dataClose = {
    image: CloseIcon
}
export const dataUser = {
    image: BgUser,
    username: 'babyoda@gmail.com'
}

export const dataNav = [
    {
        image: DashboardIcon,
        description: 'Dashboard',
        path: '#'
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
