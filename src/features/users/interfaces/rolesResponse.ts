export interface RolesResponse {
  id: string;
  name: string;
  slug: string;
}

export type Roles = {
  roles: { id: string; name: string; slug: string }[];
};

export interface RolesPayload extends Roles {}

export interface PayloadUpdateRole {
  user_id: string | undefined;
  role_id: string;
}
