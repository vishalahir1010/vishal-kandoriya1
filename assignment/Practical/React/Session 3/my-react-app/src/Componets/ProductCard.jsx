import React from "react";
import PropTypes from "prop-types";

export default function ProductCard({ productName, price }) {
  return (
    <div
      style={{ border: "1px solid #ddd",borderRadius: "10px",padding: "15px",width: "250px",textAlign: "center", }}>
      <h2>{productName}</h2>
      <p>Price: ₹{price}</p>
    </div>
  );
}
