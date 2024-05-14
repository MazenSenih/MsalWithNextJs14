'use client'
import { getLoggedInUser, isUserAllowed } from "@/msal/userHelper";
import { redirect } from "next/navigation";

export default function AdminOnlyPage() {
    const user = getLoggedInUser(); // note that by quering the user you need to use client always
    const adminClaim = process.env.NEXT_PUBLIC_USER_CLAIMS_ADMIN ?? '__admin__';

    if (!isUserAllowed(adminClaim, user)) {
        console.log(`User ${user?.username} attened to access admin only page`)
        redirect('/');
    }

    return (
        <div className="text-center m-4 text-bold text-xl">
            You are an admin, and in an admin-only page now!
        </div>
    )
}