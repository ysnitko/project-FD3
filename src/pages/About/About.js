import React, { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addFavoriteMovies,
  removeFavoriteMovies,
} from "../../redux/actions/favoriteAC";
import { showLoader } from "../../redux/actions/loaderAC";
import Characters from "../../components/Characters/Characters";
import LoadinSpinner from "../../components/LoadingSpinner/LoadinSpinner";
import "./About.css";
import Arrow from "../../helpers/img/Arrow.svg";
import calendarIcons from "../../helpers/img/calendar-icon.svg";
import Star_favotites_block from "../../helpers/img/Star_favotites_block.svg";
import arr_down from "../../helpers/img/arr-down.svg";
import arr_up from "../../helpers/img/arr-up.svg";

const About = ({ t }) => {
  const favoriteMovies = useSelector(
    (store) => store?.favoriteMoviesReducer?.favoriteMovies
  );
  const isShowLoader = useSelector(
    (store) => store?.showLoaderReducer?.isShowLoader
  );
  const dispatch = useDispatch();
  const [movie, setMovie] = useState([]);
  const [isShowCharacters, setIsShowCharacters] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchSHowInfo = async () => {
      dispatch(showLoader(true));
      const url = `https://api.tvmaze.com/shows/${id}`;
      const response = await fetch(url);
      const data = await response.json();
      setMovie(data);
      dispatch(showLoader(false));
    };
    fetchSHowInfo();
  }, [id, dispatch]);

  const transformCategory = useMemo(() => {
    let categoryMovie = movie.genres?.map((item, index) =>
      index === movie.genres.length - 1 ? item : item + ", "
    );
    return categoryMovie;
  }, [movie.genres]);

  const isFavorites = (id) => favoriteMovies.some((movie) => movie.id === id);

  const handleAddFavorites = () => {
    dispatch(addFavoriteMovies(movie));
  };

  const handleDeleteFavorites = (id) => {
    dispatch(removeFavoriteMovies(id));
  };

  const handleShowCharacters = (event) => {
    setIsShowCharacters(event.target.checked);
  };

  return (
    <div className="about-container">
      <Link className="previouse-page" to={`/movies/All/1`}>
        <img src={Arrow} alt="arrow-left" /> <span> {t("To movies list")}</span>
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
            <span className="new-episode active">{t("NEW EPISODES")}</span>
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
                <span>{t("Share")}</span>
              </div>
              <div className="rating-movie">
                <span>{t("Rate")}</span>
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
                  {t("REMOVE FROM FAVORITES")}
                </button>
              ) : (
                <button
                  className="add-favorites-btn"
                  onClick={handleAddFavorites}
                >
                  {t("ADD TO FAVORITES")}
                </button>
              )}
            </div>
            <label htmlFor="showCharacters">
              <input
                type="checkbox"
                id="showCharacters"
                checked={isShowCharacters}
                onChange={handleShowCharacters}
              />
              {!isShowCharacters ? (
                <div className="toggle-container">
                  <span className="toggle-actors">{t("Actors")}</span>
                  <img src={arr_down} alt="arrow-down" />
                </div>
              ) : (
                <div className="toggle-container">
                  <span className="toggle-actors">{t("Actors")}</span>
                  <img src={arr_up} alt="arrow-up" />
                </div>
              )}
            </label>
            {isShowCharacters && <Characters id={id} />}
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
