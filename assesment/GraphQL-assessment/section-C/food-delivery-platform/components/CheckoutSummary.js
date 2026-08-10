import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { applyDiscount, removeFromCart, updateQuantity } from "@/store/store";
import { placeOrder } from "@/lib/firebase";

export default function CheckoutSummary({ user }) {
  const dispatch = useDispatch();
  const { items, discountApplied } = useSelector((state) => state.cart);
  const [discountCode, setDiscountCode] = useState("");
  const [status, setStatus] = useState("");

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const discountValue = discountApplied ? subtotal * 0.1 : 0;
  const total = subtotal - discountValue;

  const handleApplyDiscount = async () => {
    if (discountCode.trim().toLowerCase() !== "save10") {
      setStatus("Invalid discount code.");
      return;
    }

    await dispatch(applyDiscount());
    setStatus("Discount applied successfully!");
  };

  const handlePlaceOrder = async () => {
    if (!items.length) {
      setStatus("Your cart is empty.");
      return;
    }

    const order = {
      id: `${Date.now()}`,
      userEmail: user?.email || "guest@example.com",
      restaurant: "FoodieHub",
      items,
      subtotal,
      discount: discountValue,
      total,
      createdAt: new Date().toISOString(),
    };

    await placeOrder(order);
    setStatus("Order placed successfully.");
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <div className="card" style={{ display: "grid", gap: "0.9rem" }}>
      <h3>Checkout Summary</h3>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        items.map((item) => (
          <div key={item.id} style={{ display: "grid", gap: "0.35rem" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "0.5rem",
              }}
            >
              <span>{item.name}</span>
              <strong>${item.price * item.quantity}</strong>
            </div>
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(event) =>
                  dispatch(updateQuantity(item.id, Number(event.target.value)))
                }
                style={{ width: "72px", padding: "0.45rem" }}
              />
              <button
                className="button secondary"
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}

      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
        <input
          value={discountCode}
          onChange={(event) => setDiscountCode(event.target.value)}
          placeholder="Discount code"
        />
        <button className="button secondary" onClick={handleApplyDiscount}>
          Apply
        </button>
      </div>

      <div
        style={{
          borderTop: "1px solid #f3f4f6",
          paddingTop: "0.75rem",
          display: "grid",
          gap: "0.35rem",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>Subtotal</span>
          <strong>${subtotal.toFixed(2)}</strong>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>Discount</span>
          <strong>${discountValue.toFixed(2)}</strong>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>Total</span>
          <strong>${total.toFixed(2)}</strong>
        </div>
      </div>

      <button className="button" onClick={handlePlaceOrder}>
        Place Order
      </button>
      {status ? <p>{status}</p> : null}
    </div>
  );
}
