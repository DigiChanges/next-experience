
export interface ItemsResponse {
    id: string;
    name: string;
    description: number;
    file: any;
    createdAt: number;
    updatedAt: number;
}

export type Item =
{
    name: string;
    description: number;
    file: any;
}

export interface ItemPayload extends Item {}
