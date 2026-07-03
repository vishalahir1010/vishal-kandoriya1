import { useState } from "react";

export default function StarRating() {
  const [rating, setRating] = useState(0);

  return (
    <div style={{ fontSize: "30px" }}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => setRating(star)}
          style={{cursor: "pointer", color: star <= rating ? "gold" : "gray"
          }}>★
        </span>
      ))}
    </div>
  );
}