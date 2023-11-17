import React from "react";
import {IItemApiResponse} from "@/features/items/models";
import {List} from "@/features/items/organisms/List";

interface IProps
{
    items: IItemApiResponse[]
}
export const ItemsTemplate: React.FC<IProps> = (props) => {
    return (
        <List items={props.items}/>
    )
}
