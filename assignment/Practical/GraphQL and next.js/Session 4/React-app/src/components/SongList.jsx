import { useQuery } from "@apollo/client/react";
import { GET_SONGS } from "../graphql/queries";
import SongItem from "./SongItem";

function SongList() {
  const { loading, error, data } =
    useQuery(GET_SONGS);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error...</h2>;

  return (
    <>
      <h2>Total Songs: {data.songs.length}</h2>

      <ul>
        {data.songs.map((song) => (
          <SongItem
            key={song.id}
            song={song}
          />
        ))}
      </ul>
    </>
  );
}

export default SongList;