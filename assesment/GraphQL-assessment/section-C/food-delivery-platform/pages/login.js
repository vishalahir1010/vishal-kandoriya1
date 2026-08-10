import AuthPanel from "@/components/AuthPanel";
import Navbar from "@/components/Navbar";

export default function LoginPage() {
  return (
    <>
      <Navbar />
      <main
        style={{ maxWidth: "960px", margin: "0 auto", padding: "2rem 1.25rem" }}
      >
        <h1>Sign in to order food</h1>
        <p style={{ marginBottom: "1rem" }}>
          Use the form below to sign in or create a new account.
        </p>
        <AuthPanel />
      </main>
    </>
  );
}
