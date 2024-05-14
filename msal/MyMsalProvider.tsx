'use client'

import { useEffect } from "react";
import { initializeMsal, msalInstance } from "@/msal/msal";
import { AuthenticatedTemplate, MsalProvider, UnauthenticatedTemplate } from "@azure/msal-react"
import UnauthorizedMessage from "@/components/UnauthorizedMessage";

export default function MyMsalProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        initializeMsal();
    }, []);

    return (
        <MsalProvider instance={msalInstance}>
            <AuthenticatedTemplate>
                {children}
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate>
                <UnauthorizedMessage />
            </UnauthenticatedTemplate>
        </MsalProvider>
    );
};