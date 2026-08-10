import { useQuery } from "@apollo/client/react";

import {
  GET_ADMIN_RESTAURANTS,
} from "../graphql/queries";

function AdminRestaurants() {
  const {
    loading,
    error,
    data,
  } = useQuery(GET_ADMIN_RESTAURANTS);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error.message}</h2>;
  }

  return (
    <div>
      <h2>🖥️ Admin Dashboard</h2>

      <p>
        Admin receives the complete restaurant profile.
      </p>

      {data?.restaurants?.map((restaurant) => (
        <div
          className="restaurant-card"
          key={restaurant.id}
        >
          <h3>{restaurant.name}</h3>

          <p>
            ⭐ Rating: {restaurant.averageRating}
          </p>

          <p>
            🚚 Delivery Fee: ₹{restaurant.deliveryFee}
          </p>

          <hr />

          <h4>Owner Details</h4>

          <p>Name: {restaurant.ownerName}</p>

          <p>Phone: {restaurant.ownerPhone}</p>

          <p>Email: {restaurant.ownerEmail}</p>

          <h4>Restaurant Statistics</h4>

          <p>
            Total Orders: {restaurant.totalOrders}
          </p>

          <p>
            Active Menu Items: {restaurant.activeMenuItems}
          </p>

          <p>City: {restaurant.city}</p>
        </div>
      ))}
    </div>
  );
}

export default AdminRestaurants;