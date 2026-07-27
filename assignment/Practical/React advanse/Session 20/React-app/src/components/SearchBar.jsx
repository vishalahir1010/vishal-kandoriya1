import { useState } from "react";

function SearchBar({ setMovies }) {
  const [search, setSearch] = useState("");

  const searchMovies = async () => {
    if (!search.trim()) return;

    const response = await fetch(
      `https://www.omdbapi.com/?s=${search}&apikey=${import.meta.env.VITE_API_KEY}`
    );

    const data = await response.json();

    setMovies(data.Search || []);
  };

  return (
    <div>
      <div className="search-box">
      <input
        type="text"
        placeholder="Search Movie..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={searchMovies}>
        Search
      </button>
      </div>  
    </div>
  );
}

export default SearchBar;