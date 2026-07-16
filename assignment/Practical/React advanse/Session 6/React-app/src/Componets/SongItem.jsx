import React from "react";
const SongItem = React.memo(
  ({ song, toggleFavorite }) => {
    console.log("Rendering:", song.name);
    return (
      <div>

        <h4>
          {song.name}

          {song.favorite && " ⭐"}
        </h4>
        <button
          onClick={() => toggleFavorite(song.id)}>
          {
            song.favorite
              ? "Remove Favorite"
              : "Add Favorite"
          }
        </button>
      </div>
    );
  }
);

export default SongItem;