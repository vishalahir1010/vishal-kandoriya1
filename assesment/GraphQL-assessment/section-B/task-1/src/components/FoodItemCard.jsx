import { useState } from "react";
import "./FoodItemCard.css";

function FoodItemCard({ name, price, category, isAvailable }) {
  const [isInCart, setIsInCart] = useState(false);

  return (
    <div className="food-card">
      <h2>{name}</h2>

      <p>
        <strong>Price:</strong> ₹{price}
      </p>

      <p>
        <strong>Category:</strong> {category}
      </p>

      <p>
        <strong>Status:</strong>{" "}
        {isAvailable ? "Available" : "Not Available"}
      </p>

      {!isInCart ? (
        <button
          disabled={!isAvailable}
          className={!isAvailable ? "disabled-btn" : ""}
          onClick={() => setIsInCart(true)}
        >
          Add to Cart
        </button>
      ) : (
        <span className="added-label">Added ✓</span>
      )}
    </div>
  );
}

export default FoodItemCard;