'use server'
import { Database } from "@/features/shared/interfaces/database";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { ILoginForm } from "../interfaces/IloginForm";

const supabase = createClientComponentClient<Database>();

export const handleSignIn = async ({username, password} : ILoginForm) => {
 
    await supabase.auth.signInWithPassword({
        // email: "natanaelrusso18@hotmail.com",
        // password: "WjpJwcPJPOYZXzRPVHAM",
        email: username,
        password,
    });
    
};




export const handleSignOut = async () => {
    await supabase.auth.signOut();
    
};