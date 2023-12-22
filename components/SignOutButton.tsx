'use client'
import { handleLogout } from "@/msal/msal";

const SignOutButton = ({ className = "bg-blue-200 text-blue-700 hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded shadow-md", text = "Logout" }) => {
  return (
    <button type="button" className={className} onClick={() => handleLogout("redirect")}>
      {text}
    </button>
  );
};
export default SignOutButton;