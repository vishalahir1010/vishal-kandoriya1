import Link from "next/link";

export default function Explore() {
  return (
    <div>
      <nav style={{ marginBottom: "20px" }}>
        <Link href="/home">Home</Link> |{" "}
        <Link href="/explore">Explore</Link> |{" "}
        <Link href="/contact">Contact</Link>
      </nav>

      <h1>Explore Trending Playlists</h1>
    </div>
  );
}
