import React from 'react'

export default function CartSummary({ items }) {
  return (
    <div>
      <h2>Cart Summary</h2>

      {items.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item.name} - ₹{item.price}
            </li>
          ))}
        </ul>
      )}

      {items.length >= 3 && (
        <button>Checkout Now</button>
      )}
    </div>
  )
}
