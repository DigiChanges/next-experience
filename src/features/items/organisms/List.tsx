import Card from "../atoms/Card";

import "./List.css";
import {IItemApiResponse} from "@/features/items/models";

interface ListStarshipProps
{
    items?: IItemApiResponse[]
}

const List = (props: ListStarshipProps) =>
{
    return (
        <div className="container-list">
            {props.items && props.items.map((item: IItemApiResponse) => (
                <Card
                    key={item?.id}
                    name={item.name}
                    type={item.type}
                />
            ))}
        </div>
    );
};

export default List;
