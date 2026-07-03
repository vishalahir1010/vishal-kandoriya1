import React, { useEffect, useState } from "react";

export default function Api() {
   const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setError(false);

        const response = await fetch("https://jsonplaceholder.typicode.com/invalidurl");

        if (!response.ok) {
          throw new Error("error");
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(true);
      }
    }

    fetchData();
  }, []);

  if (error) return <p>Error loading data</p>;

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>{item.title}</div>
      ))}
    </div>
  );
}