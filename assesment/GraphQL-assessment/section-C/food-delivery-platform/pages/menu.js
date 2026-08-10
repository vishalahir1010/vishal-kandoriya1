import { useQuery, gql } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "@/components/Navbar";
import FoodItemCard from "@/components/FoodItemCard";
import CheckoutSummary from "@/components/CheckoutSummary";
import { useMemo } from "react";
import { useRouter } from "next/router";
import { onAuthStateChanged } from "@/lib/firebase";
import { useEffect, useState } from "react";

const GET_MENU = gql`
  query GetMenu {
    menuItems {
      id
      name
      description
      price
      image
    }
  }
`;

export default function MenuPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { items: cartItems } = useSelector((state) => state.cart);
  const [user, setUser] = useState(null);
  const { loading, error, data } = useQuery(GET_MENU, {
    variables: {},
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged((currentUser) =>
      setUser(currentUser),
    );
    return () => unsubscribe();
  }, []);

  const items = useMemo(() => data?.menuItems ?? [], [data]);

  const handleAddToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  return (
    <>
      <Navbar />
      <main
        style={{
          maxWidth: "1220px",
          margin: "0 auto",
          padding: "2rem 1.25rem",
        }}
      >
        <section style={{ display: "grid", gap: "1.25rem" }}>
          <div>
            <h1>Restaurant Menu</h1>
            <p>Choose fresh meals and build your delivery order.</p>
            {user ? (
              <p>Signed in as {user.email}</p>
            ) : (
              <button
                className="button secondary"
                onClick={() => router.push("/login")}
              >
                Sign in to order
              </button>
            )}
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.6fr 0.8fr",
              gap: "1rem",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "1rem",
              }}
            >
              {items.map((item) => (
                <FoodItemCard
                  key={item.id}
                  item={item}
                  onAddToCart={handleAddToCart}
                  loading={false}
                  error={null}
                />
              ))}
              {loading ? <FoodItemCard loading={true} error={null} /> : null}
              {error ? <FoodItemCard loading={false} error={error} /> : null}
            </div>
            <CheckoutSummary user={user} />
          </div>
          {cartItems.length > 0 ? (
            <p>Cart has {cartItems.length} item(s).</p>
          ) : null}
        </section>
      </main>
    </>
  );
}
