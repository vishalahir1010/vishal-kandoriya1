
import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <main
      style={{
        padding: "50px",
        textAlign: "center",
      }}
    >
      <h1>Login</h1>

      <p>Login using your Google account.</p>

      <button onClick={() => signIn("google")}>
        Continue with Google
      </button>
    </main>
  );
}

