import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
const GET_SONGS = gql`
  query GetSongs {
    playlists {
      name
      songs {
        title
        duration
      }
    }
  }
`;

function SongList() {
  const { loading, error, data } = useQuery(GET_SONGS);

  if (loading) {
    return <p className="loading">Loading songs...</p>;
  }

  if (error) {
    return <p className="error">{error.message}</p>;
  }

  return (
    <div className="song-list">
      <h2>All Songs</h2>

      {data.playlists.map((playlist) => (
        <div key={playlist.name}>
          <h3>{playlist.name}</h3>

          {playlist.songs.map((song) => (
            <div className="song-row" key={song.title}>
              <span>{song.title}</span>

              <span>{song.duration} seconds</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default SongList;