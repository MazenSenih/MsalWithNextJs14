const CLIENT_ID = "YourClientID";
export const API_SCOPE = "api://" + CLIENT_ID + "/YourAppName";

export const msalConfig = {
    auth: {
        clientId: CLIENT_ID,
        authority: "https://login.microsoftonline.com/YourTenantID",
        redirectUri: "/",
        postLogoutRedirectUri: "/",
        scope: API_SCOPE,
        domain: "YourDomain",
    },
    cache: {// Optional
        cacheLocation: 'localStorage',  // Configures cache location. "sessionStorage" is more secure, but "localStorage" gives you SSO between tabs.
        storeAuthStateInCookie: false,  // Set this to "true" if you are having issues on IE11 or Edge
    },
};

export const loginRequest = {
    scopes: [API_SCOPE]
};

export const userDataLoginRequest = {
    scopes: ["user.read"]
};

export const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
};