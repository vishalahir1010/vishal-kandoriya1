import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import { onAuthStateChanged, onOrdersSnapshot } from "@/lib/firebase";

export default function OrderHistoryPage() {
  const router = useRouter();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      if (!currentUser) {
        router.replace("/login");
      }
    });

    const unsubscribeOrders = onOrdersSnapshot((items) => {
      setOrders(
        items.filter((order) => order.userEmail === user?.email || !user),
      );
      setLoading(false);
    });

    return () => {
      unsubscribeAuth();
      unsubscribeOrders();
    };
  }, [router, user]);

  if (!user) {
    return null;
  }

  return (
    <>
      <Navbar />
      <main
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "2rem 1.25rem",
        }}
      >
        <h1>Order History</h1>
        <p>Track your latest confirmed deliveries.</p>
        {loading ? <p>Loading orders...</p> : null}
        {!loading && orders.length === 0 ? <p>No orders yet.</p> : null}
        <div style={{ display: "grid", gap: "1rem", marginTop: "1rem" }}>
          {orders.map((order) => (
            <div key={order.id} className="card">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                }}
              >
                <strong>{order.restaurant || "FoodieHub"}</strong>
                <span>${order.total}</span>
              </div>
              <p>
                {order.items
                  ?.map((item) => `${item.name} x${item.quantity}`)
                  .join(", ")}
              </p>
              <small>{new Date(order.createdAt).toLocaleString()}</small>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
