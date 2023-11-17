import { IItemApiResponse } from "@/features/items/models";
import React from "react";
import { CardItem } from "@/features/items/atoms/card/CardItem";
import style from './list.module.css';
import { AddItem } from "../atoms/addItem/AddItem";


interface IProps {
    items: IItemApiResponse[]
}

export const List: React.FC<IProps> = (props) => {
    return (
        <section className={style.test}>
            <AddItem />
            <section className={style.container}>

                {props && props.items.map((item: IItemApiResponse) => (
                    <CardItem key={item.id} name={item.name} type={item.type} />
                ))}

            </section>
        </section>
    );
};
