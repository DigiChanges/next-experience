'use client'
import style from './navbar.module.css';
import Image from "next/image";
import {dataClose, dataNav, dataUser} from "@/features/navbar/constants/dataNav";
import Link from "next/link";
import {useState} from "react";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);
    const handleNavbar = (): void => {
        setIsOpen(!isOpen);
        setSelectedItemIndex(null);
    };

    const handleItemClick = (index: number): void => {
        setSelectedItemIndex(index);
    };

    return (
        <header className={`${style.container} ${isOpen && style.navActive}`}>
            <nav>
                <div className={`${style.openMenu}`}>
                    <Image className={`${isOpen && style.rotateIcon}`} onClick={handleNavbar} src={dataClose.image} alt={'close'} height={200} width={200}/>
                </div>
                <div className={style.iconUser}>
                    <Image src={dataUser.image} alt={'Icon user'} height={1920} width={1080}/>
                    <p>{dataUser.username}</p>
                </div>
                <ul>
                    {
                        dataNav.map(({image, description, path}, index) =>
                            <li key={description} className={index === selectedItemIndex ? style.selectedItem : ''}>
                                <Link onClick={(e) => {
                                    !path && e.preventDefault()
                                    handleItemClick(index)
                                }}
                                      href={path ?? '#'}
                                >
                                    <Image src={image} alt={'menu item'}/>
                                    <p>{description}</p>
                                </Link>
                            </li>)
                    }
                </ul>
                <span className={style.line}></span>
            </nav>
        </header>
    )
}






