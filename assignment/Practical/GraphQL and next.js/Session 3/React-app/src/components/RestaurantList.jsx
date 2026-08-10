import { useQuery } from "@apollo/client/react";
import { GET_RESTAURANTS } from "../graphql/queries";
import RestaurantCard from "./RestaurantCard";

function RestaurantList() {
  const { loading, error, data } = useQuery(GET_RESTAURANTS);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error.message}</h2>;

  return (
    <>
      <h2>Restaurants</h2>

      {data.restaurants.map((restaurant) => (
        <RestaurantCard
          key={restaurant.id}
          restaurant={restaurant}
        />
      ))}
    </>
  );
}

export default RestaurantList;