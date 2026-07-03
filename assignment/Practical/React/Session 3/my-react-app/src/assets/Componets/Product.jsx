import React from 'react'

export default function Product({productName,price}) {
  return (
     <div style={{border: "1px solid #ddd", borderRadius: "10px",padding: "15px",width: "250px",textAlign: "center",
        boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
      }}
    >
      <h2>{productName}</h2>
      <p>Price: ₹{price}</p>
    </div>
  );
}
  