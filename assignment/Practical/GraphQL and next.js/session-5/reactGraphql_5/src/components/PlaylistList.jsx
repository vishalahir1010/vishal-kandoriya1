import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
const GET_PLAYLISTS = gql`
  query GetPlaylists {
    playlists {
      id
      name
      songs {
        id
        title
        artist
        duration
      }
    }
  }
`;

function PlaylistList() {
  const { loading, error, data } = useQuery(GET_PLAYLISTS);

  if (loading) {
    return <p className="loading">Loading playlists...</p>;
  }

  if (error) {
    return <p className="error">{error.message}</p>;
  }

  return (
    <div className="playlist-container">
      {data.playlists.map((playlist) => (
        <div className="playlist-card" key={playlist.id}>
          <h2>{playlist.name}</h2>

          <p>
            <strong>Songs:</strong> {playlist.songs.length}
          </p>

          {playlist.songs.map((song) => (
            <div className="song" key={song.id}>
              <h3>{song.title}</h3>

              <p>Artist: {song.artist}</p>

              <p>Duration: {song.duration} seconds</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default PlaylistList;