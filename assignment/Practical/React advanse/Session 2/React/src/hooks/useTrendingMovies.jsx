import { useEffect, useState } from "react";

export default function useTrendingMovies() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          "https://api.themoviedb.org/3/trending/movie/day?api_key=YOUR_API_KEY"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return { data, loading, error };
}