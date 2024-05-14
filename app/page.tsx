import UserRolesContainer from "@/components/UserRolesContainer";
import Link from "next/link";

export default function Home() {
  const adminClaim = process.env.NEXT_PUBLIC_USER_CLAIMS_ADMIN ?? '__admin__';

  return (
    <div className="p-10 m-10 rounded-lg text-md text-center h-20 flex flex-col gap-4 antialiased">
      <h1>Welcome to the main page</h1>
      <div className="flex flex-col gap-2 text-sm max-w-xs mx-auto my-10 uppercase">
        <Link href="/adminonlypage" className="fancybtn">Test admin only page</Link>
        <Link href="/gettokentest" className="fancybtn">Get Token Test Page Example</Link>
      </div>
      <div className="flex flex-col gap-2 max-w-xs mx-auto my-10">
        <h1>Only Admins can see the below message</h1>
        <UserRolesContainer allowedRoles={[adminClaim]}>
          <h2 className="p-4 bg-green-100 text-blue-500 font-semibold rounded-md shadow">If you see this then you are an admin</h2>
        </UserRolesContainer>
      </div>
    </div>
  )
}
