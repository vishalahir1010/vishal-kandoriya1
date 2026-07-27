import { memo } from "react";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

const MovieCard = memo(({ movie }) => {

  const addWishlist = async () => {
    await addDoc(collection(db, "wishlist"), movie);
    alert("Added to Wishlist");
  };

  return (
    <div className="card">

      <img src={movie.Poster} alt={movie.Title} />

      <h3>{movie.Title}</h3>

      <p>{movie.Year}</p>

      <button onClick={addWishlist}>
        Add Wishlist
      </button>

    </div>
  );
});

export default MovieCard;