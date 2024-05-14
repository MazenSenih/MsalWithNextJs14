'use client'
import { getToken } from "@/msal/msal";
import { useEffect } from "react";

export default function GetTokenTestPage() {
    useEffect(() => {
        async function fetchToken() {
            await getToken().then(response => {
                alert(`token is ${response}`)
            });
        }
        fetchToken();
    })
    return (
        <div className="flex justify-center p-10">
            You should see an alert of a token generated based on your msal configurations.
        </div>
    )
}