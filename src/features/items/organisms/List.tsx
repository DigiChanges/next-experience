import Card from "../atoms/Card";

import "./List.css";
import {IItemApiResponse} from "@/features/items/models";
import React from "react";

interface IProps
{
    items: IItemApiResponse[]
}

export const List: React.FC<IProps> = (props) =>
{
    return (
        <div className="container-list">
            {props && props.items.map((item: IItemApiResponse) => (
                <Card
                    key={item?.id}
                    name={item.name}
                    type={item.type}
                />
            ))}
        </div>
    );
};
