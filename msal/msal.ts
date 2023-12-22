import { AuthenticationResult, EventType, PublicClientApplication } from "@azure/msal-browser";
import { getCurrentToken } from "@/msal/tokenFetcher";
import { msalConfig, loginRequest } from "@/msal/authConfig";

export const msalInstance = new PublicClientApplication(msalConfig);

export function initializeMsal() {
  console.log("=> msal initialization..");
  // Account selection logic is app dependent. Adjust as needed for different use cases.
  const accounts = msalInstance.getAllAccounts();
  if (accounts.length > 0) {
    msalInstance.setActiveAccount(accounts[0]);
  }

  msalInstance.addEventCallback(async (event) => {
    if (event.eventType === EventType.LOGIN_SUCCESS && event.payload) {
      const payload = event.payload as AuthenticationResult;
      const account = payload.account;
      msalInstance.setActiveAccount(account);
    }
  });
}

export async function getToken() {
  const authToken = await getCurrentToken(msalInstance);
  console.log("AUTH TOKEN:", authToken);

  return authToken;
}

export const handleLogin = (loginType = "redirect") => {
  if (loginType === "popup") {
    msalInstance.loginPopup(loginRequest).catch((e) => {
      console.error(`loginPopup failed: ${e}`);
    });
  } else if (loginType === "redirect") {
    msalInstance.loginRedirect(loginRequest).catch((e) => {
      console.error(`loginRedirect failed: ${e}`);
    });
  }
};

export const handleLogout = (logoutType = "redirect") => {
  if (logoutType === "popup") {
    msalInstance.logoutPopup().catch((e: any) => {
      console.error(`logoutPopup failed: ${e}`);
    });
  } else if (logoutType === "redirect") {
    const logoutRequest = {
      account: msalInstance.getActiveAccount(),
      postLogoutRedirectUri: "/",
    };
    msalInstance.logoutRedirect(logoutRequest).catch((e) => {
      console.error(`logoutRedirect failed: ${e}`);
    });
  }
};