"use client";

import { useSession, signIn, signOut } from "next-auth/react";
export default function Home() {
  const { data: session } = useSession();
  if (session) {
    return (
      <div>
        <h1>Home Page</h1>

        <h2>Name: {session.user.name}</h2>

        <h2>Email: {session.user.email}</h2>

        <button onClick={() => signOut()}>Logout</button>
      </div>
    );
  }

  return (
    <div>
      <h1>NextAuth Google Login</h1>

      <button onClick={() => signIn("google")} style={{ color: "blue" }}>
        Login With Google
      </button>
    </div>
  );
}
