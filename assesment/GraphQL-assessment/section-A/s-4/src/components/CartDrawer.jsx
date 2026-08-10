import { useSelector } from "react-redux";

function CartDrawer() {
  const { items, total } = useSelector((state) => state.cart);

  return (
    <div className="card">
      <h2>Cart Drawer</h2>

      <p>Total Items: {items.length}</p>

      <p>Total Price: ₹{total}</p>
    </div>
  );
}

export default CartDrawer;
