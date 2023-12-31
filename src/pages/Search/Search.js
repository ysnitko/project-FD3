import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Movie from "../../components/Movie/Movie";
import Arrow from "../../helpers/img/Arrow.svg";
import "./Search.css";

const Search = ({ t }) => {
  const searchMovies = useSelector(
    (store) => store?.setMovieListReducer?.searchMovies
  );
  return (
    <div className="favorites-container">
      <Link className="previouse-page" to={`/movies/All/1`}>
        <img src={Arrow} alt="arrow-left" /> <span>{t("To movies list")}</span>
      </Link>
      {searchMovies.length > 0 ? (
        <span className="search-movies"> {t("Searching results")}</span>
      ) : (
        <span className="search-movies">{t("Oops...no results")} </span>
      )}

      <div>
        <div className="movies-list">
          {searchMovies.map((movie) => (
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

export default React.memo(Search);
