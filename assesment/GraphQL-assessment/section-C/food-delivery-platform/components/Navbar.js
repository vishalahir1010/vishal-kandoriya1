import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{ background: "#111827", color: "#f9fafb" }}>
      <div
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "1rem 1.25rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        <Link href="/" style={{ fontSize: "1.1rem", fontWeight: 700 }}>
          Foodstore
        </Link>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Link href="/">Home</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/order-history">Order History</Link>
        </div>
      </div>
    </nav>
  );
}
