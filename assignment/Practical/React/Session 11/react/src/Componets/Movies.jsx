import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Movies() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);

        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setPosts(response.data); 
      } catch (err) {
        setError("Error loading data");
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, []);

  return (
    <div>
      <h1>Movies</h1>

      {loading && <h2>Loading...</h2>}

      {error && <p>{error}</p>}

      {!loading && !error && (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}