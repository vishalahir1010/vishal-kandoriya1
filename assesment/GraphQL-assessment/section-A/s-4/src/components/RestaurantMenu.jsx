import { useDispatch } from "react-redux";
import { addItem } from "../features/cartSlice";

function RestaurantMenu() {
  const dispatch = useDispatch();

  const pizza = {
    id: 1,
    name: "Pizza",
    price: 300,
  };

  return (
    <div className="card">
      <h2>Restaurant Menu</h2>

      <h3>🍕 Pizza</h3>
      <p>Price: ₹300</p>

      <button onClick={() => dispatch(addItem(pizza))}>Add to Cart</button>
    </div>
  );
}

export default RestaurantMenu;
