export default function FoodItemCard({ item, onAddToCart, loading, error }) {
  if (loading) {
    return (
      <div
        className="card"
        style={{
          minHeight: "220px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Loading menu items...
      </div>
    );
  }

  if (error) {
    return (
      <div className="card" style={{ borderColor: "#f87171" }}>
        <h3>Unable to load menu</h3>
        <p>{error.message}</p>
      </div>
    );
  }

  if (!item) return null;

  return (
    <div
      className="card"
      style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
    >
      <div
        style={{
          height: "120px",
          borderRadius: "12px",
          background: "linear-gradient(135deg, #fef3c7, #fb923c)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "2rem",
        }}
      >
        {item.image || "🍽️"}
      </div>
      <div>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <strong>${item.price}</strong>
        <button className="button" onClick={() => onAddToCart(item)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
