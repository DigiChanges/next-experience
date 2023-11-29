import { IItemApiResponse } from "@/features/items/models";
import React from "react";
import { CardItem } from "@/features/items/atoms/card/CardItem";
import style from './list.module.css';
import { AddItem } from "../atoms/addItem/AddItem";
import { getData } from "@/features/shared/actions/getData";


export const List: () => Promise<React.JSX.Element>  = async() => {

  const  data = await getData<IItemApiResponse[]>('api/items')

    return (
            <section>
                   
                        <AddItem />
                   
                    <div className={style.cards}>
                        {data.map((item: IItemApiResponse) => (
                            <CardItem key={item.id} name={item.name} type={item.type} />
                        ))}
                    </div>
            </section>
    );
};
