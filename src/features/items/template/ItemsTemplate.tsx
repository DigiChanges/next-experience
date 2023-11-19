import React, { Suspense } from "react";
import {IItemApiResponse} from "@/features/items/models";
import {List} from "@/features/items/organisms/List";
import { LoaderStarsWars } from "@/features/shared/atoms/loader/LoaderStarsWars";


export const ItemsTemplate: React.FC = () => {
    return (
        <Suspense fallback={ <LoaderStarsWars/>}>
        <List />
        </Suspense>
    )
}
