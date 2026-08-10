import { useQuery } from "@apollo/client/react";

import {
  GET_MOBILE_RESTAURANTS,
} from "../graphql/queries";

function MobileRestaurants() {
  const {
    loading,
    error,
    data,
  } = useQuery(GET_MOBILE_RESTAURANTS);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error.message}</h2>;
  }

  return (
    <div>
      <h2>📱 Mobile App</h2>

      <p>
        Mobile app receives only the required fields.
      </p>

      {data?.restaurants?.map((restaurant) => (
        <div
          className="restaurant-card"
          key={restaurant.name}
        >
          <h3>{restaurant.name}</h3>

          <p>
            ⭐ Rating: {restaurant.averageRating}
          </p>

          <p>
            🚚 Delivery Fee: ₹{restaurant.deliveryFee}
          </p>
        </div>
      ))}
    </div>
  );
}

export default MobileRestaurants;