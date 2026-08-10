import { useEffect, useState } from "react";

import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

function OrderList() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "orders"),
      (snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setOrders(data);
      }
    );

    return () => unsubscribe();
  }, []);

  const deleteOrder = async (id) => {
    await deleteDoc(doc(db, "orders", id));
  };

  return (
    <div>
      <h2>Live Orders</h2>

      {orders.map((order) => (
        <div key={order.id}>
          <h3>{order.customerName}</h3>

          <p>{order.itemOrdered}</p>

          <p>Quantity : {order.quantity}</p>

          <button
            onClick={() => deleteOrder(order.id)}
          >
            Cancel Order
          </button>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default OrderList;