import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: "40px" }}>
      <h1>Welcome to Insta News</h1>

      <p>
        A Next.js news application with GraphQL, Firebase Authentication, and AI
        summaries.
      </p>

      <nav
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <Link href="/feed">Feed</Link>

        <Link href="/about">About</Link>
      </nav>
    </main>
  );
}
