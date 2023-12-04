
import React, {useEffect} from "react";
import {Card, CardFooter} from "@nextui-org/react";
import style from './card.module.css'
import { DeleteItem } from "../deleteItem/DeleteItem";
import { EditItem } from "../editItem/EditItem";

interface CardItemProps
{
    name: string;
    type: number;
    id: string;
}
export const CardItem: React.FC<CardItemProps> = (props) => {

    return (
        <Card className={style.container}
            radius="lg"
        >
           <div className={style.state}>

           </div>
            <div className="flex flex-col px-4">
                <p className="text-md">Type: {props.type}</p>
                <h2 className={style.name}>{props.name}</h2>
            </div>
            <CardFooter className={style.cardFooter}>
               <DeleteItem id={props.id}/>
               <EditItem/>
            </CardFooter>
        </Card>
    );
}

