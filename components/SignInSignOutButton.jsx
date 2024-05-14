"use client"

import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";
import { InteractionStatus } from "@azure/msal-browser";

const SignInSignOutButton = () => {
    const { inProgress } = useMsal();
    const isAuthenticated = useIsAuthenticated();

    console.log('Msal=> is auth :', isAuthenticated);
    console.log('Msal=> in progress :', inProgress);
    
    let result = null;

    useEffect(() => {
        if (isAuthenticated) {
            result = <SignOutButton />;
        } else if (
            // inProgress !== InteractionStatus.Startup && 
            inProgress !== InteractionStatus.HandleRedirect) {
            console.log('returning sign in button');
            // inProgress check prevents sign-in button from being displayed briefly after returning from a redirect sign-in. Processing the server response takes a render cycle or two
            result = <SignInButton />;
        } else {
            console.log('returning SignInSignOutButton of null');
            result = null;
        }
    });

    return result;
}

export default SignInSignOutButton;