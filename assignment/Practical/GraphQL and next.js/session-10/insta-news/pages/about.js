
export async function getServerSideProps() {
  return {
    props: {},
  };
}

export default function About() {
  return (
    <main style={{ padding: "30px" }}>
      <h1>About Insta News</h1>

      <p>
        Insta News is a Next.js application that demonstrates
        server-side rendering, GraphQL, Firebase Authentication,
        and AI-powered post summarization.
      </p>
    </main>
  );
}
