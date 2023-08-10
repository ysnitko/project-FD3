import React from "react";
import "./LeftAside.css";

const LeftAside = ({ navigateHome }) => {
  console.log("render LeftAside");
  return (
    <div className="left-navigation">
      <button
        className="home-btn"
        type="button"
        onClick={navigateHome}
      ></button>
      <button className="favorites-btn" type="button"></button>
    </div>
  );
};

export default LeftAside;
