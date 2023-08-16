import React from "react";
import "./LeftAside.css";

const LeftAside = ({ navigateHome, navigateFavorites, favoriteMovies }) => {
  console.log("render LeftAside");

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
