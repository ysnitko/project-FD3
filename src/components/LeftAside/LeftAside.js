import React from 'react';
import { useSelector } from 'react-redux';
import './LeftAside.css';

const LeftAside = ({ navigateHome, navigateFavorites }) => {
  const favoriteMovies = useSelector(
    (store) => store?.favoriteMoviesReducer?.favoriteMovies
  );
  return (
    <div className="left-navigation">
      <button
        className="home-btn"
        type="button"
        onClick={navigateHome}
      ></button>
      {favoriteMovies.length > 0 ? (
        <button
          className="favorites-add-btn"
          type="button"
          onClick={navigateFavorites}
        ></button>
      ) : (
        <button
          className="favorites-btn-none"
          type="button"
          onClick={navigateFavorites}
        ></button>
      )}
    </div>
  );
};

export default LeftAside;
