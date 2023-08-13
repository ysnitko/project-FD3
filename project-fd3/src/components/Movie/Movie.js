import React from 'react';
import './Movie.css';
import ratingStar from '../../helpers/img/rating.svg';
import movieDuration from '../../helpers/img/watch-time.svg';

const Movie = ({ imageCover, name, status, runtime, rating, category }) => {
  // console.log('render Movie');
  let editCategory = category.map((item, index) =>
    index === category.length - 1 ? item : item + ', '
  );

  return (
    <li className="movie">
      <img className="movie-cover" src={imageCover} alt={'movie-cover'} />
      <div className="movie-info">
        <div className="movie-title">
          <span>{name}</span>
          <span className="select">{status}</span>
        </div>
        <span className="category">{editCategory}</span>
        <div className="movie-duration-rating">
          <span>HD</span>
          <div className="movie-prop">
            <div className="movie-duration">
              <img src={movieDuration} alt="duration" />
              <span>{runtime}min</span>
            </div>
            <div className="movie-rating">
              <img src={ratingStar} alt="rating" />
              <span>{rating}</span>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default React.memo(Movie);
