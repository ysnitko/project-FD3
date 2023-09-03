import React from 'react';
import { Link } from 'react-router-dom';
import Movie from '../../components/Movie/Movie';
import Arrow from '../../helpers/img/Arrow.svg';
import './Search.css';

const Search = ({ searchMovies, t }) => {
  // console.log('rendering Search');
  return (
    <div className="favorites-container">
      <Link className="previouse-page" to={`/movies/All/1`}>
        <img src={Arrow} alt="arrow-left" /> <span>{t('Back')}</span>
      </Link>
      {searchMovies.length > 0 ? (
        <span className="search-movies"> {t('Searching results')}</span>
      ) : (
        <span className="search-movies">{t('Oops...no results')} </span>
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
