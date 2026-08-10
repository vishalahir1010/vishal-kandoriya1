import { useRouter } from "next/router";

export default function Playlist({ playlist }) {
  const router = useRouter();

  if (router.isFallback) {
    return <h2>Loading...</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Spotify Playlist Detail</h1>

      <h2>Playlist ID: {router.query.playlistId}</h2>

      <p>{playlist.message}</p>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { playlistId: "101" } },
      { params: { playlistId: "202" } },
      { params: { playlistId: "303" } }
    ],
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      playlist: {
        id: params.playlistId,
        message: `Welcome to Spotify Playlist ${params.playlistId}`
      }
    }
  };
}
