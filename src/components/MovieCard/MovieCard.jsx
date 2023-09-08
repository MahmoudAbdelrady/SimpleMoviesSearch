import "./movie-card.css";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie">
      <div className="m-pic">
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/400"
          }
          alt={movie.Title}
        />
      </div>
      <div className="m-year">
        <p>{movie.Year}</p>
      </div>
      <div className="m-type">
        <span>{movie.Type}</span>
        <p>{movie.Title}</p>
      </div>
    </div>
  );
};

export default MovieCard;
