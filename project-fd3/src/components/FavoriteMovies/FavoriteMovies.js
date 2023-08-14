import React from "react";
import { Link } from "react-router-dom";
import Movie from "../Movie/Movie";
import "./FavoriteMovies.css";
import Arrow from "../../helpers/img/Arrow.svg";

const FavoriteMovies = ({ favoriteMovies }) => {
  console.log("rendering FavoriteMovies");
  return (
    <div className="favorites-container">
      <span className="upcoming-movies">Manage your favorite movies</span>
      <Link className="previouse-page" to={`/movies`}>
        <img src={Arrow} alt="arrow-left" /> <span>Back</span>
      </Link>
      <div>
        <ul className="movies-list">
          {favoriteMovies.map((movie) => (
            <Link
              className="movie-link"
              key={movie.id}
              to={`/movies/about/${movie.id}`}
            >
              <Movie
                imageCover={movie.image.medium}
                name={movie.name}
                status={movie.status}
                runtime={movie.runtime}
                rating={movie.rating.average}
                category={movie.genres}
              />
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FavoriteMovies;
