import React, { useEffect, useState } from "react";
import axios from "axios";

export default function RestaurantSearch() {
  const [restaurants, setRestaurants] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      setRestaurants(response.data);
    } catch (err) {
      console.error(err);
      setError("Failed to load restaurants.");
    }
  };

  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{ width: "400px", margin: "50px auto", textAlign: "center",}}>
      <h2>Restaurant Search</h2>

      <input type="text"
        placeholder="Search restaurants..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "20px",
        }}/>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul style={{ listStyle: "none", padding: 0 }}>
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant) => (
            <li key={restaurant.id}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                marginBottom: "10px",
                borderRadius: "5px",
              }}>
            {restaurant.name}
            </li>
          ))
        ) : (
          <li>No restaurants found.</li>
        )}
      </ul>
    </div>
  );
}