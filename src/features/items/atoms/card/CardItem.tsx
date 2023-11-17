
import React from "react";
import {Card, CardFooter, Image, Button} from "@nextui-org/react";
import style from './card.module.css'
import {icons} from "@/features/shared/hooks/icons";

interface CardItemProps
{
    name: string;
    type: number;
}
export const CardItem: React.FC<CardItemProps> = (props) => {
const { DeleteIcon, EditIcon } = icons();
    return (
        <Card className={style.container}
            radius="lg"
        >
           <div className={style.state}>

           </div>
            <div className="flex flex-col px-4">
                <p className="text-md">Type: {props.type}</p>
                <h2 className="text-xl">{props.name}</h2>
            </div>
            <CardFooter className={style.cardFooter}>
                <Button isIconOnly className={style.btnDelete}>
                   <Image  src={DeleteIcon.src} width={100} height={100} alt={"delete"}/>
                </Button>
                <Button isIconOnly className={style.btnEdit}>
                    <Image src={EditIcon.src}  width={100} height={100} alt={"edit"}/>
                </Button>

            </CardFooter>
        </Card>
    );
}

