import React from "react";
import "./Home.css";
import calendarIcons from "../../helpers/img/calendar-icon.svg";

const Home = ({ navigateMovies, currentPage, currentCategory }) => {
  console.log("render Home");
  return (
    <div className="home-screen">
      <div className="title">
        <span className="Filmagnet">Filmagnet</span>
        <span className="Unlimited">
          Unlimited <span className="Entertainment">Entertainment</span>
        </span>
        <span className="Movies">Movies, TVs shows, & More.</span>
      </div>
      <div className="movie-info-row">
        <span className="movie-lbl">Movie</span>
        <span className="hd-lbl">HD</span>
        <span className="category-movie">Acrion, Drama</span>
        <div className="date-realese">
          <img src={calendarIcons} alt="calendar" />
          <span>2023</span>
        </div>
      </div>
      <button
        className="play-now"
        type=""
        onClick={() => navigateMovies(currentCategory, currentPage)}
      >
        SHOW NOW
      </button>
    </div>
  );
};

export default Home;
