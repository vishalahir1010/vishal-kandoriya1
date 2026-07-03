import React from "react";
import Playlist from "./Componets/Playlist";
import OrderStatus from "./Componets/OrderStatus";
import FollowerList from "./Componets/FollowerList";
import CartSummary from "./Componets/CartSummary";

function App() {
  const songs = [
    { title: "Blinding Lights", artist: "The Weeknd" },
    { title: "Shape of You", artist: "Ed Sheeran" },
    { title: "Levitating", artist: "Dua Lipa" },
  ];

  const followers = ["Alice", "Bob", "Charlie"];
 

  const cartItems = [
    { name: "Shoes", price: 2500 },
    { name: "Watch", price: 1200 },
    { name: "Bag", price: 1800 },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Practice App</h1>

      <Playlist songs={songs} />

      <OrderStatus isDelivered={false} />

      <FollowerList followers={followers} />

      <CartSummary items={cartItems} />
    </div>
  );
}

export default App;