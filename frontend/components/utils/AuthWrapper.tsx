'use client'
import { useSession } from "next-auth/react";
import { AppProps } from "next/app";
import { useEffect } from "react";

const AuthWrapper = ({ children, authCallback }: {children: any, authCallback: any} ) => {
    const session = useSession();

    useEffect(() => {
        authCallback(session.data);
    }, [session]);
    
    return (session.status === "authenticated")? <>{children}</> : <></> ;

};

export default AuthWrapper;
