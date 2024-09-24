
export interface ItemsResponse {
    id: string;
    name: string;
    description: number;
    createdAt: number;
    updatedAt: number;
}

export type Item =
{
    name: string;
    description: number;
}

export interface ItemPayload extends Item {}
