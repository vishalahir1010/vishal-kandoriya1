import React, { useEffect, useState } from "react";

const OrderTracking = () => {
  const [orderStatus, setOrderStatus] = useState("Preparing");

  useEffect(() => {
    const statuses = [
      "Preparing",
      "Cooking",
      "Packed",
      "Out for Delivery",
      "Delivered",
    ];

    let index = 0;

    const interval = setInterval(() => {
      index++;

      if (index < statuses.length) {
        setOrderStatus(statuses[index]);
      } else {
        clearInterval(interval);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>🍕 Live Order Tracking</h2>
      <h3>Status: {orderStatus}</h3>
    </div>
  );
};

export default OrderTracking;