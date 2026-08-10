import Link from "next/link";

export default function Contact() {
  return (
    <div>
      <nav style={{ marginBottom: "20px" }}>
        <Link href="/home">Home</Link> |{" "}
        <Link href="/explore">Explore</Link> |{" "}
        <Link href="/contact">Contact</Link>
      </nav>

      <h1>Contact Us</h1>
    </div>
  );
}
