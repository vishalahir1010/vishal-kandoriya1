import React from 'react'
import { useState, useEffect } from "react";

export default function MovieSuggestions() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);
  return (
    <div>
         <h2>Movie Suggestions</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>{movie.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
