import React from "react";
import { Link } from "react-router-dom";
import Movie from "../Movie/Movie";
import Arrow from "../../helpers/img/Arrow.svg";

const Search = ({ searchMovies }) => {
  console.log("rendering Search");
  return (
    <div className="favorites-container">
      <Link className="previouse-page" to={`/movies/All/1`}>
        <img src={Arrow} alt="arrow-left" /> <span>Back</span>
      </Link>
      {searchMovies.length > 0 ? (
        <span className="upcoming-movies">Searching results</span>
      ) : (
        <span className="upcoming-movies">Sorry...no results</span>
      )}

      <div>
        <ul className="movies-list">
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
        </ul>
      </div>
    </div>
  );
};

export default React.memo(Search);
