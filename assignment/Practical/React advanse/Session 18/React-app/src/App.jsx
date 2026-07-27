import { useEffect, useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const tmdbKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);

        const res = await fetch(`https://www.omdbapi.com/?apikey=${tmdbKey}&s=${"batman"}`
        );

        const data = await res.json();

        console.log("TMDB Response:", data);

        if (data.success === false) {
          throw new Error(data.status_message);
        }

        setMovies(data.Search
 || []);

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [tmdbKey]);


  const bgColor =
    import.meta.env.MODE === "development"
      ? "lightblue"
      : "lightgreen";


  return (
    <div
      style={{
        backgroundColor: bgColor,
        minHeight: "100vh",
        padding: "20px",
      }}
    >

      <h1 style={{textAlign:"center"}}>
        Trending Movies
      </h1>


      {loading && (
        <h2 style={{textAlign:"center"}}>
          Loading...
        </h2>
      )}


      {error && (
        <h2 style={{color:"red"}}>
          {error}
        </h2>
      )}



      <div
        style={{
          display:"grid",
          gridTemplateColumns:
          "repeat(auto-fill,minmax(220px,1fr))",
          gap:"20px"
        }}
      >

        {movies.map((movie)=>(

          <div
            key={movie.id}
            style={{
              background:"white",
              padding:"10px",
              borderRadius:"10px",
              boxShadow:"0 3px 8px gray"
            }}
          >

            <img
              src={
                movie.poster_path
                ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                : "https://via.placeholder.com/300x450"
              }
              alt={movie.title}
              style={{
                width:"100%",
                height:"300px",
                objectFit:"cover",
                borderRadius:"10px"
              }}
            />


            <h3>
              {movie.title}
            </h3>


            <p>
              ⭐ Rating: {movie.vote_average}
            </p>

            <p>
              Release: {movie.release_date}
            </p>
          </div>

        ))}
      </div>


      

    </div>
  );
}

export default App;