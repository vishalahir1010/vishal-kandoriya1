import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
const GET_PLAYLIST = gql`
  query GetPlaylist($id: ID!) {
    playlist(id: $id) {
      id
      name
      songs {
        id
        title
        artist
      }
    }
  }
`;

function PlaylistDetails({ playlistId }) {
  const { loading, error, data } = useQuery(GET_PLAYLIST, {
    variables: {
      id: playlistId,
    },
  });

  if (loading) {
    return <p className="loading">Loading playlist...</p>;
  }

  if (error) {
    return <p className="error">{error.message}</p>;
  }

  if (!data.playlist) {
    return <p>Playlist not found.</p>;
  }

  return (
    <div className="details-card">
      <h2>{data.playlist.name}</h2>

      {data.playlist.songs.map((song) => (
        <div className="song" key={song.id}>
          <h3>{song.title}</h3>
          <p>Artist: {song.artist}</p>
        </div>
      ))}
    </div>
  );
}

export default PlaylistDetails;