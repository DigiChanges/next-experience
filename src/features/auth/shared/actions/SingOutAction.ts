
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '@/features/shared/interfaces/database';
import { toast } from 'react-toastify';


export const handleSignOut = async() => {
  const supabase = createClientComponentClient<Database>();

  await  toast.promise(supabase.auth.signOut(), {
    error: 'Oops, something went wrong',
    success: 'The item was updated correctly',
    pending:'Updating item...'
  });
};
