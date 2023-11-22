
'use client'
import style from './logintemplate.module.css'
import {Database} from "@/features/shared/interfaces/database";
import {useRouter} from "next/navigation";
import {createClientComponentClient} from "@supabase/auth-helpers-nextjs";
export const LoginTemplate = () => {

    const router = useRouter();
    const supabase = createClientComponentClient<Database>();

    const handleSignUp = async () => {
        await supabase.auth.signUp({
            email: "alexisgraff123@gmail.com",
            password: "12345678",
            options: {
                emailRedirectTo: `${location.origin}/auth/callback`,
            },
        });
        router.refresh();
    };

    const handleSignIn = async () => {
        await supabase.auth.signInWithPassword({
            // email: "natanaelrusso18@hotmail.com",
            // password: "WjpJwcPJPOYZXzRPVHAM",
            email: "alexisgraff123@gmail.com",
            password: "12345678",
        });
        router.refresh();
    };

    const handleSignOut = async () => {
        await supabase.auth.signOut();
        router.refresh();
    };
    // TODO: Ver si se puede hacer server side.
    return(
        <div className={style.container}>
            <div onClick={handleSignIn}>Login</div>
            <div onClick={handleSignUp}>Register</div>
            <div onClick={handleSignOut}>Logout</div>
        </div>
    )
}
