'use server';

import { getCurrentUserRole } from '@/features/users/actions/usersAction';
import { supabaseClientManager } from '@/lib/SupabaseClientManager';

type NewUserByAdmin = {
  first_name?: string;
  last_name?: string;
  phone?: number;
  email: string;
  password: string;
  role: string;
  account_active: boolean;
};

export const getRoles = async () => {
  const supabase = supabaseClientManager.getPrivateClient();

  const { data, error } = await supabase.from('roles').select();
  if (error) {
    throw new Error('Error getting the roles');
  } else {
    return data;
  }
};

export const addNewUserByAdmin = async (props: NewUserByAdmin) => {
  const supabase = supabaseClientManager.getPrivateClient();

  const phone = props.phone ? props.phone.toString() : null;

  const {
    data: { user },
    error: CreateError,
  } = await supabase.auth.admin.createUser({
    email: props.email,
    password: props.password,
    email_confirm: props.account_active,
    user_metadata: {
      first_name: props.first_name,
      last_name: props.last_name,
      phone: phone,
      account_active: props.account_active,
    },
  });

  if (CreateError) {
    throw new Error('Error creating a new user');
  }

  const { error: RolUpdateError } = await supabase
    .from('users_has_roles')
    .update({
      role_id: props.role,
    })
    .eq('user_id', user?.id);

  if (RolUpdateError) {
    throw new Error('Error updating the role of the user');
  }

  if (!props.account_active) {
    const { error: SendError } = await supabase.auth.resend({
      type: 'signup',
      email: props.email,
      options: {
        emailRedirectTo: 'https://example.com/welcome',
      },
    });

    if (SendError) {
      throw new Error('Error sending the confirmation email to the user');
    }
  }
};

export const updateUserByAdmin = async () => {
  // const supabase = getSupabaseClientServer();
};

export const deleteUserByAdmin = async (id: string) => {
  const supabase = supabaseClientManager.getPublicClient();
  const role = await getCurrentUserRole();

  if (role[0].role_id === 'admin') {
    throw new Error('You dont have the required permission to do this request');
  }

  const { error } = await supabase.auth.admin.deleteUser(id);

  if (error) {
    throw new Error(`Error at deleting the user: ${error.message}`);
  }
};
