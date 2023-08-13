import React from 'react';
import { Link } from 'react-router-dom';
import Movie from '../Movie/Movie';
import './FavoriteMovies.css';

const FavoriteMovies = ({ favoriteMovies }) => {
  console.log('rendering FavoriteMovies');
  return (
    <div className="favorites-container">
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
