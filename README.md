# Next.js >=v13 with MSAL (Microsoft authentication library) Integration

This project integrates [Next.js](https://nextjs.org/) v14.0.4 with React v18 and the latest version of MSAL (Microsoft Authentication Library). It's bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and includes configurations for @azure/msal-browser: v3.6.0 and msal-react: v2.0.8. 

This boilerplate is designed to streamline the integration of Azure AD authentication in a server-rendered Next.js application, while ensuring the main layout remains succinct and organized.

## Prerequisites
Before you begin, ensure you have Node.js [version] installed.

## Setting Up Your MSAL Backend and Configurations
To use Azure AD authentication, you must first set up your backend in Microsoft Azure.

### Steps to Configure Azure:
1. Navigate to [Microsoft Azure App Registration](https://portal.azure.com/#view/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/~/RegisteredApps).
2. Create a new registration for your web app.
3. Note down the following values:
   - Application (client) ID
   - Directory (tenant) ID
   - Managed application name in local directory
   - Your domain name (e.g., `xxxxx.onmicrosoft.com`)
4. Update these values in the MSAL authentication configuration file [msal/authConfig.js](msal/authConfig.js).

## Running the App
Use the following commands to run the app:

```bash
# Restoring dependencies
npm install

# Build the application
npm run build

# Start the development server
npm run dev
```

### Final words
Hope this helps you starting your MSAL authentication faster.

[Mazen Alsenih](https://mazensenih.com)
