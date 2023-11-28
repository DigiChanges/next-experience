'use client'
import { Database } from "@/features/shared/interfaces/database";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { ILoginForm } from "../../login/interfaces/IloginForm";
import { useRouter } from "next/navigation";
 


export const handleSignUp = async ({username, password} : ILoginForm) => {
    const supabase = createClientComponentClient<Database>();
    
    const router = useRouter();

    await supabase.auth.signUp({
        email: username,
        password,
        options: {
            emailRedirectTo: `${location.origin}/auth/callback`,
        }
    })
     router.refresh();
};
