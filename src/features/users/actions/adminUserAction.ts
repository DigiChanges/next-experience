'use server';

import { getCurrentUserRole } from '@/features/users/actions/usersAction';
import { getSupabaseClientServer } from '@/lib/private/privateClient';

type NewUserByAdmin = {
  first_name: string | undefined;
  last_name: string | undefined;
  phone: string | undefined;
  email: string;
  password: string;
  account_active: boolean;
};

export const addNewUserByAdmin = async (props: NewUserByAdmin) => {
  const supabase = getSupabaseClientServer();

  const { error } = await supabase.auth.admin.createUser({
    email: props.email,
    password: props.password,
    email_confirm: props.account_active,
    user_metadata: {
      first_name: props.first_name,
      last_name: props.last_name,
      phone: props.phone,
    },
  });

  if (error) {
    console.log(error);
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
      console.log(SendError);
    }
  }
};

export const updateUserByAdmin = async () => {
  // const supabase = getSupabaseClientServer();
};

export const deleteUserByAdmin = async (id: string) => {
  const supabase = getSupabaseClientServer();
  const role = await getCurrentUserRole();

  if (role[0].role_id === 'admin') {
    throw new Error('You dont have the required permission to do this request');
  }

  const { error } = await supabase.auth.admin.deleteUser(id);

  if (error) {
    throw new Error(`Error at deleting the user: ${error.message}`);
  }
};
