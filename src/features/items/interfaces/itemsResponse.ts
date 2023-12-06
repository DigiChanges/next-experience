
export interface ItemsResponse {
    id: string;
    name: string;
    type: number;
    createdAt: number;
    updatedAt: number;
}

export interface Item
{
    name: string;
    type: number;
}

export interface ItemPayload extends Item {}
