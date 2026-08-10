import "./RestaurantList.css";
import useFetchRestaurants from "../hooks/useFetchRestaurants";

function RestaurantList() {
  const { data, loading, error } = useFetchRestaurants();

  if (loading) {
    return <p className="loading">Fetching restaurants...</p>;
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  return (
    <div className="container">
      {data.map((restaurant) => (
        <div className="card" key={restaurant.id}>
          <h2>{restaurant.name}</h2>

          <p>
            <strong>Email:</strong> {restaurant.email}
          </p>
        </div>
      ))}
    </div>
  );
}

export default RestaurantList;