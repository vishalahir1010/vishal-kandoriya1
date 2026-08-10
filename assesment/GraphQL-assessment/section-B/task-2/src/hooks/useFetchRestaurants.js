import { useEffect, useState } from "react";

const useFetchRestaurants = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error();
        }

        const result = await response.json();

        setData(result);
      } catch (err) {
        setError("Unable to fetch restaurants. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  return { data, loading, error };
};

export default useFetchRestaurants;