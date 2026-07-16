import React, { useContext } from "react";
import { FavoritesContext } from "./FavoritesContext";

function Restaurant({ id, name }) {
  const { state, dispatch } = useContext(FavoritesContext);

  const isFavorite = state.favorites.includes(id);

  return (
    <div>
      <h3>{name}</h3>

      <button
        onClick={() =>
          dispatch({
            type: isFavorite
              ? "REMOVE_FAVORITE"
              : "ADD_FAVORITE",
            payload: id,
          })
        }
      >
        {isFavorite ? "Remove Favorite" : "Add Favorite"}
      </button>
    </div>
  );
}

export default Restaurant;