import { motion } from "framer-motion";
import { StaticImageData } from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import style from './dropdownUser.module.css'

interface IProps {
    dataPerfil: {
        icon: StaticImageData;
        description: string;
        path: string;
    }[],
    style: {
        readonly [key: string]: string;
    },
    dataUser: {
        image: StaticImageData,
        username: string,
        icon: StaticImageData
    },
    dataLogin: {
        icon: StaticImageData
    }
    isUserDropdownOpen: boolean,
    handleDropdownUser: () => void
}

export const DropdownUser: React.FC<IProps> = (props) => {



    let background = props.isUserDropdownOpen ? 'animation' : ''

    return (

        <div>
            <div onClick={props.handleDropdownUser} className={`${style.iconUser} ${background}`}>
                <Image src={props.dataUser.image} alt={'Icon user'} height={1920} width={1080} />
                <p>{props.dataUser.username}</p>
                <Image className={style.dropdown} src={props.dataUser.icon} alt={'dropdown'} />

            </div>

            <motion.ul
                initial={{ height: 0 }}
                animate={{ height: props.isUserDropdownOpen ? 'auto' : 0 }}
                transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                style={{ overflow: 'hidden' }}
            >


                    <div className={style.perfil}>
                        {
                            props.dataPerfil.map(({ icon, description }) =>
                                <div key={description} className={style.perfilSections}>
                                    {icon && <Image src={icon} alt='icon perfil' />}
                                    <p>{description}</p>
                                </div>
                            )

                        }
                        <div className={style.logOut}>
                            <Image src={props.dataLogin.icon} alt='LogOut' />
                        </div>
                    </div>


            </motion.ul>

        </div>

    )


}

