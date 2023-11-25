'use server'
import { Database } from "@/features/shared/interfaces/database";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { ILoginForm } from "../../login/interfaces/IloginForm";


export const handleSignUp = async ({username, password} : ILoginForm) => {
    const supabase = createClientComponentClient<Database>();
    
    await supabase.auth.signUp({
        email: "alexisgraff123@gmail.com",
        password: "12345678",
        options: {
            emailRedirectTo: `${location.origin}/auth/callback`,
        },
    });    
};