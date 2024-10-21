export interface ProfileResponse {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: number;
  createdAt: number;
  updatedAt: number;
}

export type ProfileType = {
  first_name?: string;
  last_name?: string;
  phone?: string;
};

export interface ProfilePayload extends ProfileType {}
