import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Movie from "../../components/Movie/Movie";
import "./FavoriteMovies.css";
import Arrow from "../../helpers/img/Arrow.svg";

const FavoriteMovies = ({ t }) => {
  const favoriteMovies = useSelector(
    (store) => store?.favoriteMoviesReducer?.favoriteMovies
  );
  return (
    <div className="favorites-container">
      <Link className="previouse-page" to={`/movies/All/1`}>
        <img src={Arrow} alt="arrow-left" /> <span>{t("Back")}</span>
      </Link>
      {favoriteMovies.length > 0 ? (
        <span className="favorites-movies">
          {t("Manage your favorite movies")}
        </span>
      ) : (
        <span className="favorites-movies"> {t("No favorite movies")}</span>
      )}

      <div>
        <div className="movies-list">
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
        </div>
      </div>
    </div>
  );
};

export default FavoriteMovies;
