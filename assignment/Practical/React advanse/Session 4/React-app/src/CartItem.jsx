import React, { useReducer } from "react";

const initialQuantity = 1;

function reducer(state, action) {
  switch (action.type) {
    case "INCREASE":
      return state + 1;

    case "DECREASE":
      return state > 1 ? state - 1 : 1;

    case "RESET":
      return 1;

    default:
      return state;
  }
}

function CartItem() {
  const [quantity, dispatch] = useReducer(reducer, initialQuantity);

  return (
    <div>
      <h2>Flipkart Cart Item</h2>

      <h3>Quantity: {quantity}</h3>

      <button onClick={() => dispatch({ type: "INCREASE" })}>
        +
      </button>

      <button
        onClick={() => dispatch({ type: "DECREASE" })}
        disabled={quantity === 1}
      >
        -
      </button>

      <button onClick={() => dispatch({ type: "RESET" })}>
        Reset
      </button>
    </div>
  );
}

export default CartItem;