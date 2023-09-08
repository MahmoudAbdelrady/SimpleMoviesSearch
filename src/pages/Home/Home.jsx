import { useState, useEffect } from "react";
import "./home.css";
import MovieCard from "../../components/MovieCard/MovieCard";
const API_URL = "http://www.omdbapi.com/?apikey=c887083a";
const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("");
  }, []);
  return (
    <div className="home">
      <h1>Movies Website</h1>
      <div className="search">
        <input
          type="search"
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={() => searchMovies(searchTerm)}>Search</button>
      </div>
      <div className="movies-container">
        {movies?.length > 0 ? (
          movies.map((movie) => <MovieCard movie={movie} />)
        ) : (
          <div className="empty">
            <h2>No Movies Found</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
