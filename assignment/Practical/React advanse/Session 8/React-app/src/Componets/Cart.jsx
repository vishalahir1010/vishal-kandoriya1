import React, { useContext } from "react";
import { CartContext } from "./CartContext";

function Cart() {
  const { cart, addToCart, removeFromCart, clearCart } =
    useContext(CartContext);

  return (
    <div>
      <button
        onClick={() =>
          addToCart({ id: 1, name: "Laptop", price: 50000 })
        }
      >
        Add Laptop
      </button>

      <button onClick={() => removeFromCart(1)}>
        Remove Laptop
      </button>

      <button onClick={clearCart}>
        Clear Cart
      </button>

      <h3>Cart Items</h3>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ₹{item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;