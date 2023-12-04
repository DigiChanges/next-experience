import { button } from '@nextui-org/react';
import style from './button.module.css'
import Image from "next/image";

interface IProps {
    descriptionActive: string;
    descriptionInactive: string
    disable: boolean;
    img: string;
    alt: string
}


export const ButtonAuth = (props: IProps) => {
    return (
        <button className={style.btn} disabled={props.disable}>
            {
                props.disable ? (<div className={style.descriptionBtn}>
                    <Image width={100} height={100} src={props.img} alt={props.alt} />
                    <span>{props.descriptionInactive}</span>
                </div>):(<div className={style.descriptionBtn}>
                <Image width={100} height={100} src={props.img} alt={props.alt} />
                <span>{props.descriptionActive}</span>
            </div>)
            }
            
        </button>
    )
}
