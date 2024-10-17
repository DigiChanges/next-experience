export interface ItemsResponse {
  id: string;
  name: string;
  // file: any;
  description: number;
  createdAt: number;
  updatedAt: number;
}

export type Item = {
  name: string;
  // file: any;
  description: number;
};

export interface ItemPayload extends Item {}
