
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Profile() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return <h1>Checking authentication...</h1>;
  }

  if (!session) {
    return null;
  }

  return (
    <main style={{ padding: "40px" }}>
      <h1>Profile</h1>

      <h2>{session.user.name}</h2>

      <p>
        <strong>Email:</strong> {session.user.email}
      </p>

      {session.user.image && (
        <img
          src={session.user.image}
          alt={session.user.name}
          width="120"
          height="120"
          style={{
            borderRadius: "50%",
          }}
        />
      )}

      <br />
      <br />

      <button onClick={() => signOut({ callbackUrl: "/" })}>
        Logout
      </button>
    </main>
  );
}
