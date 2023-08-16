import React, { useEffect, useMemo, useState } from "react";
import calendarIcons from "../../helpers/img/calendar-icon.svg";
import Star_favotites_block from "../../helpers/img/Star_favotites_block.svg";
import { Link, useParams } from "react-router-dom";
import "./About.css";
import Arrow from "../../helpers/img/Arrow.svg";
import LoadinSpinner from "../LoadingSpinner/LoadinSpinner";

const About = ({
  isShowLoader,
  setIsShowLoader,
  setFavoriteMovies,
  favoriteMovies,
}) => {
  console.log("render About");
  const [movie, setMovie] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchSHowInfo = async () => {
      setIsShowLoader(true);
      const url = `https://api.tvmaze.com/shows/${id}`;
      const response = await fetch(url);
      const data = await response.json();
      setMovie(data);
      setIsShowLoader(false);
    };
    fetchSHowInfo();
  }, [id, setIsShowLoader]);

  const transformCategory = useMemo(() => {
    let categoryMovie = movie.genres?.map((item, index) =>
      index === movie.genres.length - 1 ? item : item + ", "
    );
    return categoryMovie;
  }, [movie.genres]);

  const isFavorites = (id) => favoriteMovies.some((movie) => movie.id === id);

  const handleAddFavorites = () => {
    setFavoriteMovies((prev) => [...prev, movie]);
  };

  const handleDeleteFavorites = (id) => {
    const deleteFavorites = favoriteMovies.filter((item) => item.id !== id);
    setFavoriteMovies(deleteFavorites);
  };

  return (
    <div className="about-container">
      <Link className="previouse-page" to={`/movies/All/1`}>
        <img src={Arrow} alt="arrow-left" /> <span>Back</span>
      </Link>
      {isShowLoader ? (
        <LoadinSpinner />
      ) : (
        <div className="movie-container">
          <picture>
            <source media="(max-width: 850px)" srcSet={movie.image?.medium} />
            <img
              className="show-cover"
              src={movie.image?.original}
              alt="movie-covers"
            />
          </picture>

          <div className="movie-information">
            <span className="new-episode active"> NEW EPISODES </span>
            <span className="show-name"> {movie.name},</span>
            <div className="movie-info-row">
              <span className="movie-lbl">Movie</span>
              <span className="hd-lbl">HD</span>
              <span className="category-movie">{transformCategory}</span>
              <div className="date-realese">
                <img src={calendarIcons} alt="calendar" />
                <span>{movie.schedule?.days}</span>
                <span>{movie.schedule?.time}</span>
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
                  <span>{movie.rating?.average}</span>
                </div>
              </div>
              {isFavorites(movie.id) ? (
                <button
                  className="add-favorites-none"
                  onClick={() => handleDeleteFavorites(movie.id)}
                >
                  REMOVE FROM FAVORITES
                </button>
              ) : (
                <button
                  className="add-favorites-btn"
                  onClick={handleAddFavorites}
                >
                  ADD TO FAVORITES
                </button>
              )}
            </div>
            <span
              className="movie-summary"
              dangerouslySetInnerHTML={{ __html: movie.summary }}
            ></span>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
