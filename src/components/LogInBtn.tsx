"use client"
import { useSession, signIn, signOut } from "next-auth/react";
export default function LogInBtn() {
  const { data: session } = useSession();
  if (session) {
    return (
      <div className="flex justify-center items-center flex-col gap-5 px-10 py-5">
        <div className="bg-stone-900 p-5 rounded-lg border border-red-900 hover:border-red-700 hover:text-white">
          Signed in as {session.user?.email }
        </div>
        <br />
        <button
          className="w-full p-2 rounded-lg shadow-sm hover:shadow-md active:shadow-lg bg-stone-900 hover:text-white border-2 border-red-900 hover:border-red-700 duration-100  "
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </div>
    );
  }
  return (
    <div className="flex justify-center items-center flex-col gap-5 px-10 py-5">
      <div className="bg-stone-900 p-5 rounded-lg border border-red-900 hover:border-red-700 hover:text-white"> Not signed in </div>
      <br />
      <button
        className="w-full p-2 rounded-lg shadow-sm hover:shadow-md active:shadow-lg bg-stone-900 hover:text-white border-2 border-red-900 hover:border-red-700 duration-100  "
        onClick={() => signIn()}
      >
        Sign in
      </button>
    </div>
  );
}
