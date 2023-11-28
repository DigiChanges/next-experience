'use client'
import { Database } from "@/features/shared/interfaces/database";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";


const supabase = createClientComponentClient<Database>();

export const handleSignOut = async () => {
    await supabase.auth.signOut()
    
};
