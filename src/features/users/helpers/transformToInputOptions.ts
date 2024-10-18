import { RolesResponse } from '@/features/users/interfaces/rolesResponse';

export const transformToInputOptions = (roles: RolesResponse[]) => {
  return roles.map((role) => ({
    label: role.name,
    value: role.id,
  }));
};
