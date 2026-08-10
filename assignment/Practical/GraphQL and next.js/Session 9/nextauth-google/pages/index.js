
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <h1>Loading...</h1>;
  }

  return (
    <main style={{ padding: "40px" }}>
      <h1>Google Authentication</h1>

      {session ? (
        <>
          <h2>Welcome, {session.user.name}!</h2>

          <p>
            <strong>Name:</strong> {session.user.name}
          </p>

          <p>
            <strong>Email:</strong> {session.user.email}
          </p>

          <br />

          <button onClick={() => signOut({ callbackUrl: "/" })}>
            Logout
          </button>

          <br />
          <br />

          <Link href="/profile">
            Go to Profile
          </Link>
        </>
      ) : (
        <>
          <p>You are not logged in.</p>

          <button onClick={() => signIn("google")}>
            Continue with Google
          </button>
        </>
      )}
    </main>
  );
}

// I used ChatGPT to generate the logout function. The function uses NextAuth.js `signOut()` to log out the authenticated user and redirects the user to the homepage (`/`) after logout.
