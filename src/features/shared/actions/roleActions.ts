import { SupabaseTable } from '@/features/shared/constants/supabaseTables';
import { PayloadUpdateRole } from '@/features/users/interfaces/rolesResponse';
import { supabaseServerClientManager } from '@/lib/SupabaseServerClientManager';

export const getRoles = async () => {
  const supabase = supabaseServerClientManager.getServerPublicClient();

  const { data, error } = await supabase.from('roles').select();
  if (error) {
    throw new Error('Error getting the roles');
  } else {
    return data;
  }
};

export const updateRole = async ({ user_id, role_id }: PayloadUpdateRole) => {
  const supabase = supabaseServerClientManager.getServerPublicClient();

  const { error: RolUpdateError } = await supabase
    .from(SupabaseTable.USER_HAS_ROLES)
    .update({
      role_id,
    })
    .eq('user_id', user_id);

  if (RolUpdateError) {
    throw new Error('Error updating the role of the user');
  }
};
