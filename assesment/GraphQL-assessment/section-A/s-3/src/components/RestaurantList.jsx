import useFetchData from "../hooks/useFetchData";

function RestaurantList() {
  const { data, loading, error } = useFetchData(
    "/restaurant-api/api/Restaurant"
  );

 
  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;

  

  return (
    <div>
      <h2>Restaurant List</h2>

      {data?.map((restaurant) => (
        <div
          key={restaurant.restaurantID}
          style={{
            border: "1px solid gray",
            padding: "10px",
            margin: "10px",
          }}
        >
          <h3>{restaurant.restaurantName}</h3>
          <p>Type: {restaurant.type}</p>
          <p>Address: {restaurant.address}</p>
          <p>
            Parking: {restaurant.parkingLot ? "Available" : "Not Available"}
          </p>
        </div>
      ))}
    </div>
  );
}

export default RestaurantList;