
import { useEffect, useState } from "react";

import { onAuthStateChanged } from "firebase/auth";

import { auth } from "../lib/firebase";

import GoogleLogin from "../components/GoogleLogin";

const GET_POSTS = `
  query {
    posts {
      id
      title
      content
      author
      createdAt
    }
  }
`;

export default function Feed({ initialPosts }) {
  const [posts, setPosts] = useState(initialPosts);
  const [user, setUser] = useState(null);

  const [summaries, setSummaries] = useState({});
  const [loadingId, setLoadingId] = useState(null);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (currentUser) => {
        setUser(currentUser);
      }
    );

    return () => unsubscribe();
  }, []);

  const handleSummarize = async (post) => {
    setLoadingId(post.id);

    setErrors((previous) => ({
      ...previous,
      [post.id]: "",
    }));

    try {
      const response = await fetch("/api/summarize", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          title: post.title,
          content: post.content,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Failed to generate summary"
        );
      }

      setSummaries((previous) => ({
        ...previous,
        [post.id]: data.summary,
      }));
    } catch (error) {
      setErrors((previous) => ({
        ...previous,
        [post.id]: error.message,
      }));
    } finally {
      setLoadingId(null);
    }
  };

  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "30px",
      }}
    >
      <h1>Insta News Feed</h1>

      <GoogleLogin
        user={user}
        onUserChange={setUser}
      />

      <hr />

      <h2>Latest Posts</h2>

      {posts.map((post) => (
        <article
          key={post.id}
          style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "20px",
            marginBottom: "20px",
          }}
        >
          <h2>{post.title}</h2>

          <p>
            <strong>Author:</strong> {post.author}
          </p>

          <p>{post.content}</p>

          <small>
            Created: {post.createdAt}
          </small>

          <br />
          <br />

          <button
            onClick={() => handleSummarize(post)}
            disabled={loadingId === post.id}
          >
            {loadingId === post.id
              ? "Summarizing..."
              : "Summarize with AI"}
          </button>

          {summaries[post.id] && (
            <div
              style={{
                marginTop: "15px",
                padding: "15px",
                background: "#f5f5f5",
                borderRadius: "8px",
              }}
            >
              <strong>AI Summary:</strong>

              <p>{summaries[post.id]}</p>
            </div>
          )}

          {errors[post.id] && (
            <p style={{ color: "red" }}>
              Error: {errors[post.id]}
            </p>
          )}
        </article>
      ))}
    </main>
  );
}

export async function getServerSideProps() {
  const response = await fetch(
    `${process.env.NEXTAUTH_URL || "http://localhost:3000"}/api/graphql`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        query: GET_POSTS,
      }),
    }
  );

  const result = await response.json();

  return {
    props: {
      initialPosts: result.data?.posts || [],
    },
  };
}
