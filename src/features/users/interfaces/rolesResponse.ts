export interface RolesResponse {
  id: string;
  name: string;
  slug: string;
}

export type Roles = {
  roles: { id: string; name: string; slug: string }[];
};

export interface RolesPayload extends Roles {}
