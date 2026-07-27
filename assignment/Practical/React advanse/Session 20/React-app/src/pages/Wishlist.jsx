import { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  deleteDoc,
  doc
} from "firebase/firestore";

function Wishlist() {

  const [movies, setMovies] = useState([]);

  const loadWishlist = async () => {

    const snapshot = await getDocs(collection(db, "wishlist"));

    const data = snapshot.docs.map((docItem) => ({
      id: docItem.id,
      ...docItem.data()
    }));

    setMovies(data);
  };

  useEffect(() => {
    loadWishlist();
  }, []);

  const removeMovie = async (id) => {

    await deleteDoc(doc(db, "wishlist", id));

    loadWishlist();
  };

  return (
   <div className="wishlist">

      <h2>Wishlist</h2>

      {movies.map((movie) => (

       <div className="wishlist-item" key={movie.id}>
    <img src={movie.Poster} alt={movie.Title} />

    <div className="wishlist-info">
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
    </div>

    <button onClick={() => removeMovie(movie.id)}>
        Remove
    </button>
</div>

      ))}

    </div>
  );
}

export default Wishlist;