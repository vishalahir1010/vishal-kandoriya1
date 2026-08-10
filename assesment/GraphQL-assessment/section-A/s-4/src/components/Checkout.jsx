import { useDispatch, useSelector } from "react-redux";
import { applyPromoCode } from "../features/cartSlice";
import { useState } from "react";

function Checkout() {
  const dispatch = useDispatch();

  const { total, discount, loading, error } = useSelector(
    (state) => state.cart,
  );

  const [promo, setPromo] = useState("");

  return (
    <div className="card">
      <h2>Checkout</h2>

      <p>Total: ₹{total}</p>

      <input
        type="text"
        placeholder="Enter Promo Code"
        value={promo}
        onChange={(e) => setPromo(e.target.value)}
      />

      <button onClick={() => dispatch(applyPromoCode(promo))}>
        Apply Promo
      </button>

      {loading && <p className="loading">Checking Promo...</p>}

      {error && <p className="error">{error}</p>}

      <p className="success">Discount: {discount}%</p>

      <h3>Final Total: ₹{total - (total * discount) / 100}</h3>
    </div>
  );
}

export default Checkout;
