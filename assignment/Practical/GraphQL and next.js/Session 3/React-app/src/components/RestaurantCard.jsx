function RestaurantCard({ restaurant }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        margin: "10px",
      }}
    >
      <h3>{restaurant.name}</h3>
      <p>{restaurant.cuisine}</p>
    </div>
  );
}

export default RestaurantCard;