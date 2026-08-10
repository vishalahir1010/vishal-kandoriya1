import Head from "next/head";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Foodstore | AI Food Delivery</title>
        <meta
          name="description"
          content="A Next.js food delivery platform with auth, GraphQL, Redux, and Firebase."
        />
      </Head>
      <Navbar />
      <main
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "2rem 1.25rem",
        }}
      >
        <section style={{ display: "grid", gap: "1rem" }}>
          <div className="card">
            <h1>AI-Powered Food Delivery Platform</h1>
            <p>
              Fast meals, smart checkout, and live order tracking for modern
              customers.
            </p>
            <div
              style={{
                display: "flex",
                gap: "0.75rem",
                marginTop: "1rem",
                flexWrap: "wrap",
              }}
            >
              <Link href="/menu" className="button">
                Browse Menu
              </Link>
              <Link href="/order-history" className="button secondary">
                View Orders
              </Link>
            </div>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1rem",
            }}
          >
            <div className="card">
              <h3>Fresh picks</h3>
              <p>Daily chef specials and handcrafted comfort meals.</p>
            </div>
            <div className="card">
              <h3>Fast checkout</h3>
              <p>Manage quantity updates and discounts in one place.</p>
            </div>
            <div className="card">
              <h3>Live history</h3>
              <p>See confirmed orders update instantly from Firestore.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
