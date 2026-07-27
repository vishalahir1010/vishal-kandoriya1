import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchRestaurants,
  testThunk,
} from "../restaurants/restaurantThunk";

const RestaurantList = () => {
  const dispatch = useDispatch();

  const { restaurants, loading, error } = useSelector(
    (state) => state.restaurants
  );

  const [city, setCity] = useState("");

  useEffect(() => {
    dispatch(testThunk());

    dispatch(fetchRestaurants(""));
  }, [dispatch]);

  const handleSearch = () => {
    dispatch(fetchRestaurants(city));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Restaurant List</h2>

      <input
        type="text"
        placeholder="Enter City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={handleSearch}>
        Search
      </button>

      {loading && <h3>Loading...</h3>}

      {error && (
        <h3 style={{ color: "red" }}>
          {error}
        </h3>
      )}

      {!loading && restaurants.length === 0 && (
        <h3>No Restaurants Found</h3>
      )}

      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            {restaurant.name}
            {" - "}
            {restaurant.city}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantList;