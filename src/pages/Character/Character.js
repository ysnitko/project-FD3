import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { showLoader } from "../../redux/actions/loaderAC";
import LoadinSpinner from "../../components/LoadingSpinner/LoadinSpinner";
import Arrow from "../../helpers/img/Arrow.svg";
import arr_down from "../../helpers/img/arr-down.svg";
import arr_up from "../../helpers/img/arr-up.svg";
import "./Character.css";

const Character = ({ t }) => {
  const isShowLoader = useSelector(
    (store) => store?.showLoaderReducer?.isShowLoader
  );
  const dispatch = useDispatch();
  const [charInfo, setCharInfo] = useState([]);
  const [moviesWith, setMoviesWith] = useState([]);
  const [isShowMoviesWith, setIsShowMoviesWith] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchCharnfo = async () => {
      dispatch(showLoader(true));
      const url = `https://api.tvmaze.com/people/${id}`;
      const response = await fetch(url);
      const data = await response.json();
      setCharInfo(data);
      console.log(data);
      dispatch(showLoader(false));
    };
    fetchCharnfo();
  }, [id, dispatch]);

  useEffect(() => {
    const fetchMoviesWith = async () => {
      dispatch(showLoader(true));
      const url = `https://api.tvmaze.com/people/${id}/castcredits?embed=show`;
      const response = await fetch(url);
      const data = await response.json();
      setMoviesWith(data);
      dispatch(showLoader(false));
    };
    fetchMoviesWith();
  }, [id, dispatch]);
  console.log(moviesWith);

  const handleShowMoviesWith = (event) => {
    setIsShowMoviesWith(event.target.checked);
  };

  // const calculateAge = (dateChar) => {
  //   const [year, month, day] = dateChar.split("-");
  //   const currentDate = new Date();
  //   const birthDate = new Date(year, month - 1, day);

  //   let age = currentDate.getFullYear() - birthDate.getFullYear();

  //   if (
  //     currentDate.getMonth() < birthDate.getMonth() ||
  //     (currentDate.getMonth() === birthDate.getMonth() &&
  //       currentDate.getDate() < birthDate.getDate())
  //   ) {
  //     age--;
  //   }
  //   if (dateChar === null) {
  //     age = "no information";
  //   }
  //   return age;
  // };
  // console.log(calculateAge(charInfo.birthday));
  return (
    <div className="character-container">
      <Link className="previouse-page" to={`/movies/All/1`}>
        <img src={Arrow} alt="arrow-left" /> <span> {t("Back")}</span>
      </Link>
      {isShowLoader ? (
        <LoadinSpinner />
      ) : (
        <div className="character-information-container">
          <picture>
            <source
              media="(max-width: 850px)"
              srcSet={charInfo.image?.medium}
            />
            <img
              className="show-cover"
              src={charInfo.image?.original}
              alt="movie-covers"
            />
          </picture>
          <div className="character-information">
            <div className="person-info-header">
              <span className="person-info active">{t("PERSON INFO")}</span>
              <span className="show-primary-info"> {charInfo.name},</span>
            </div>
            <div className="show-secondary-info">
              <span>
                {t("Gender")}: {charInfo.gender}
              </span>
              <span>
                {t("Age")}:{/* {calculateAge(charInfo.birthday)} */}
              </span>
              <span>
                {t("Birthday")}: {charInfo.birthday}
              </span>
              <span>
                {t("Born in")}: {charInfo.country?.name}
              </span>
              {}
            </div>
            <div>
              <label htmlFor="showCharacters">
                <input
                  type="checkbox"
                  id="showCharacters"
                  checked={isShowMoviesWith}
                  onChange={handleShowMoviesWith}
                />
                {!isShowMoviesWith ? (
                  <div className="toggle-container">
                    <span className="toggle-actors">
                      Movies with
                      <span className="char-name active">{charInfo.name}</span>
                    </span>
                    <img src={arr_down} alt="arrow-down" />
                  </div>
                ) : (
                  <div className="toggle-container">
                    <span className="toggle-actors">
                      Movies with
                      <span className="char-name active">{charInfo.name}</span>
                    </span>
                    <img src={arr_up} alt="arrow-up" />
                  </div>
                )}
              </label>
              {isShowMoviesWith && (
                <div className="movies-links-row">
                  {moviesWith.map((movie) => {
                    return (
                      <Link
                        className="character-link"
                        key={movie._embedded.show.id}
                        to={`/movies/about/${movie._embedded.show.id}`}
                      >
                        {movie._embedded.show.name}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Character;
