'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import style from './navbar.module.css'
import Image from 'next/image';
import {dataNav, dataUser} from "@/features/shared/constants/dataNav";


export const Navbar = () => {
    return (
        <nav>
            <div className={style.container}>
                <div className={style.lineContainer}>
                <div className={style.subContainer}>
                    <section className={style.userContainer}>
                        <div>
                            <Image src={dataUser.image} width={150} height={150} alt={'user'}></Image>
                            <p>{dataUser.username}</p>
                        </div>
                    </section>
                    <section className={style.pathContainer}>
                        <ul>
                            {
                                dataNav.map( ({path, image, description}) =>
                                    <li key={description}>
                                        <Link href={path}>
                                            <Image src={image.src} width={500} height={500} alt='icon home'></Image>
                                            <p>
                                                {description}
                                            </p>
                                        </Link>
                                    </li>
                                )
                            }
                        </ul>
                    </section>
                </div>
                </div>
            </div>
        </nav>
    )

}






