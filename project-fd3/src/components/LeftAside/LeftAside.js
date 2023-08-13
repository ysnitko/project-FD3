import React from 'react';
import './LeftAside.css';

const LeftAside = ({ navigateHome, isShowFavorite }) => {
  console.log('render LeftAside');
  return (
    <div className="left-navigation">
      <button
        className="home-btn"
        type="button"
        onClick={navigateHome}
      ></button>
      {isShowFavorite ? (
        <button className="favorites-add-btn" type="button"></button>
      ) : (
        <button className="favorites-btn-none" type="button"></button>
      )}
    </div>
  );
};

export default LeftAside;
