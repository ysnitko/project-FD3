import React, { useEffect, useState } from "react";
import calendarIcons from "../../helpers/img/calendar-icon.svg";
import Star_favotites_block from "../../helpers/img/Star_favotites_block.svg";
import "./About.css";

const About = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.tvmaze.com/shows/${1}`;
      const response = await fetch(url);
      const result = await response.json();
      setMovie(result);
      console.log(result);
    };
    fetchData();
  }, []);

  let categoryMovie = movie.genres.map((item, index) =>
    index === movie.genres.length - 1 ? item : item + ", "
  );

  return (
    <div className="about-container">
      <img className="show-cover" src={movie.image.original} alt="show-cover" />
      <div className="movie-information">
        <span className="new-episode active"> NEW EPISODES </span>
        <span className="show-name"> {movie.name},</span>
        <div className="movie-info-row">
          <span className="movie-lbl">Movie</span>
          <span className="hd-lbl">HD</span>
          <span className="category-movie">{categoryMovie}</span>
          <div className="date-realese">
            <img src={calendarIcons} alt="calendar" />
            <span>{movie.schedule.days}</span>
            <span>{movie.schedule.time}</span>
          </div>
        </div>
        <div className="favorites-block">
          <div className="share">
            <button type="button"></button>
            <span>Share</span>
          </div>
          <div className="rating-movie">
            <span>Rate The Show</span>
            <div className="rating-star">
              <img src={Star_favotites_block} alt="star" />
              <span>{movie.rating.average}</span>
            </div>
          </div>
          <button className="add-favorites-btn">ADD TO FAVORITES</button>
        </div>
        <span className="movie-summary">{movie.summary}</span>
      </div>
    </div>
  );
};

export default About;
