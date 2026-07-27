import { useState, useEffect } from "react";

const API_KEY = import.meta.env.VITE_API_KEY;

function useSearchMovies(query) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!query.trim()) {
      setMovies([]);
      setError("");
      return;
    }

    const controller = new AbortController();

    async function fetchMovies() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`,
          { signal: controller.signal });

        if (!response.ok) {
          throw new Error("Network response was not OK.");
        }

        const data = await response.json();

        if (data.Response === "False") {
          throw new Error(data.Error);
        }

        setMovies(data.Search);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
          setMovies([]);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchMovies();

    return () => controller.abort();
      }, [query]);
      useEffect(() => {
        console.log("Movies updated:", movies);
      }, [movies]);

      return { movies, loading, error };
    }

    export default useSearchMovies;