import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

function OrderForm() {
  const [customerName, setCustomerName] = useState("");
  const [itemOrdered, setItemOrdered] = useState("");
  const [quantity, setQuantity] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    await addDoc(collection(db, "orders"), {
      customerName,
      itemOrdered,
      quantity,
    });

    setCustomerName("");
    setItemOrdered("");
    setQuantity("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Customer Name"
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Food Item"
        value={itemOrdered}
        onChange={(e) => setItemOrdered(e.target.value)}
      />

      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />

      <button>Add Order</button>
    </form>
  );
}

export default OrderForm;