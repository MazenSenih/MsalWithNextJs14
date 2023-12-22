'use client'

import { useEffect } from "react";
import { initializeMsal, msalInstance } from "@/msal/msal";
import { AuthenticatedTemplate, MsalProvider, UnauthenticatedTemplate } from "@azure/msal-react"
import SignOutButton from "@/components/SignOutButton";
import UnauthorizedMessage from "@/components/UnauthorizedMessage";

export default function MyMsalProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        initializeMsal();
    }, []);

    return (
        <MsalProvider instance={msalInstance}>
            <AuthenticatedTemplate>
                <div className="w-full text-center drop-shadow-xs divide-gray-400">
                    <h1 className="text-3xl font-extrabold text-gray-700 mb-2">You are logged in</h1>
                    <SignOutButton />
                </div>
                {children}
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate>
                <UnauthorizedMessage />
            </UnauthenticatedTemplate>
        </MsalProvider>
    );
};