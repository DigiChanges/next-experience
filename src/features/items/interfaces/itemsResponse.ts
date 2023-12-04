
export interface ItemsResponse {

    id: string;
    name: string;
    type: number;
    createdAt: number;
    updatedAt: number;
}

export interface item
{
    name: string;
    type: number;
}

export interface ItemPayload extends item {}
