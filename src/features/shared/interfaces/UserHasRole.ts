import { RolesResponse } from '@/features/users/interfaces/rolesResponse';
import { UserResponse } from '@/features/users/interfaces/usersResponse';

export interface UserHasRole {
  user_id: UserResponse;
  role_id: RolesResponse;
}
