import { useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";

function Home() {

  const [movies, setMovies] = useState([]);

  return (
    <div>

      <SearchBar setMovies={setMovies} />

      <div className="movies">

        {movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}/>
        ))}

      </div>

    </div>
  );
}

export default Home;