import React from "react";
import style from "./Sort.module.css";
import {icons} from "@/features/shared/hooks/icons";

interface Props {
    isResponsive: boolean;
}
export const SortComponent:React.FC<Props> = (props) => {
    const {IoSwapVertical} = icons();
    return(
        <div className={props.isResponsive ? style.containerResponsive : style.container}>
            <div className={style.containerSort}>
                <input className={style.inputSort} name="sort" type="radio" id="name"/>
                <label className={style.labelSort} htmlFor="name"><IoSwapVertical/>Name</label>
            </div>
            <div className={style.containerSort}>
                <input className={style.inputSort} name="sort" type="radio" id="type"/>
                <label className={style.labelSort} htmlFor="type"><IoSwapVertical/>Type</label>
            </div>
        </div>
    )
}
