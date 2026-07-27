import { useState } from "react";
import useSearchMovies from "./hooks/useSearchMovies";

function App() {
  const [query, setQuery] = useState("");

  const { movies, loading, error } = useSearchMovies(query);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          width: "300px",
          padding: "10px",
          marginBottom: "20px",
          fontSize: "16px",
        }}
      />

      {loading && <p>Loading...</p>}

      {error && <p style={{ color: "red" }}>{error}</p>}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "20px",
        }}
      >
        {movies.map((movie) => (
          <div
            key={movie.imdbID}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
              textAlign: "center",
              padding: "10px",
              background: "#fff", }}
          >
            <img src={ movie.Poster }
              alt={movie.Title}
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />

            <h3 style={{ margin: "10px 0 5px" }}>{movie.Title}</h3>

            <p style={{ color: "gray", margin: 0 }}>
              Year: {movie.Year}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;