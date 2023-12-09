
export interface ItemsResponse {
    id: string;
    name: string;
    type: number;
    createdAt: number;
    updatedAt: number;
}

export type Item =
{
    name: string;
    type: number;
}

export interface ItemPayload extends Item {}
