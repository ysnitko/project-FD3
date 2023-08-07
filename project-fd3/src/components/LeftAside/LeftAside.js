import React from "react";
import "./LeftAside.css";

const LeftAside = ({ handleClickHome }) => {
  return (
    <div className="left-navigation">
      <button
        className="home-btn"
        type="button"
        onClick={handleClickHome}
      ></button>
      <button className="favorites-btn" type="button"></button>
    </div>
  );
};

export default LeftAside;
