import { SignInButton } from "./SignInButton";

export default function UnauthorizedMessage() {
    return (
        <div className="w-full text-center drop-shadow-xs divide-gray-400">
            <h1 className="text-6xl font-extrabold text-gray-900 dark:text-white mb-2">401</h1>
            <h3 className="text-3xl font-semibold text-gray-600 dark:text-gray-300 mb-6">Unauthorized</h3>
            <hr/>
            <div className="mt-6">
                <SignInButton text="Log in again" />
            </div>
        </div>
    )
}