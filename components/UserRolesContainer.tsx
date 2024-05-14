'use client'

import { getUserClaims, isUserAllowed } from "@/msal/userHelper";
import { useEffect, useState } from "react";

interface ContainerProps {
    allowedRoles: string[];
    children?: React.ReactNode;
}

export default function UserRolesContainer({ allowedRoles, children }: ContainerProps) {
    const [showContent, setShowContent] = useState<boolean>(false);
    useEffect(() => {
        const claims = getUserClaims();
        allowedRoles?.forEach(role => {
            if (!isUserAllowed(role, null, claims)) {
                setShowContent(false);
                return;
            }

            setShowContent(true);
        });
    }, [allowedRoles])

    return (
        showContent && <> {children}</>
    );
};