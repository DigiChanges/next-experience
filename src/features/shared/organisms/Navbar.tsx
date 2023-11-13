'use client'

// import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import style from './navbar.module.css'
import Image from 'next/image';
import { useIcons } from '../hooks/useIcons';
import { useImage } from '../hooks/useImages';


export const Navbar = () => {
    const pathname = usePathname();
    const { DashboarIcon, HomeIcon, ItemsIcon } = useIcons()
    const { BgUser }  = useImage()

    return (
        <nav>
            <div className={style.generalContainer}>
                <section className={style.userContainer}>
                    <div>
                        <Image src={BgUser.src} width={48} height={48} alt={'user'}></Image>
                    </div>
                </section>
                <section className={style.pathContainer}>
                    <ul>
                        <li><Image src={HomeIcon.src} width={500} height={500} alt='icon home'></Image></li>
                        <li><Image src={DashboarIcon.src} width={500} height={500} alt='icon home'></Image></li>
                        <li><Image src={ItemsIcon.src} width={500} height={500} alt='icon home'></Image></li>
                    </ul>
                </section>
            </div>
        </nav>
    )

}






