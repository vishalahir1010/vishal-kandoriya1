import React from "react";

const RestaurantCard = ({ name, cuisine, rating, deliveryTime }) => {
  return (
    <div
      style={{
        width: "250px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "15px",
        margin: "10px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
      }}
    >
      <h2>{name}</h2>
      <p><strong>Cuisine:</strong> {cuisine}</p>
      <p><strong>Rating:</strong> ⭐ {rating}</p>
      <p><strong>Delivery:</strong> {deliveryTime}</p>
    </div>
  );
};

export default RestaurantCard;