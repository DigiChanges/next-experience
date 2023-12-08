
import { Database } from '@/features/shared/interfaces/database';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { toast } from 'react-toastify';

const supabase = createClientComponentClient<Database>();

export const handleSignOut = async() => {
  await  toast.promise(supabase.auth.signOut(), {
    error: 'Oops, something went wrong',
    success: 'See you soonn',
    pending:'Leaving next experience...'
  });
};
