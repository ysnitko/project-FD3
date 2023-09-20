import React from "react";
import Header from "./components/Header/Header";
import LeftAside from "./components/LeftAside/LeftAside";
import PageRouter from "./routes/PageRouter";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { setPageNumbers } from "./redux/actions/pageNumAc";
import { setCategoryTypes } from "./redux/actions/categoryAC";
import "./App.css";

const App = () => {
  // const store = useSelector((store) => store);
  // console.log(store);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  const navigateHome = () => {
    dispatch(setCategoryTypes("All"));
    dispatch(setPageNumbers(1));
    navigate("/");
  };

  const navigateMovies = (category, page) => {
    if (typeof category !== `string`) {
      category = "All";
    }
    navigate(`/movies/${category}/${page}`);
  };

  const navigateFavorites = () => {
    navigate("/favorites");
  };

  const navigateSearch = () => {
    navigate("/search");
  };

  const navigateAuth = () => {
    navigate("/autorization");
  };

  return (
    <div className="container">
      <Header
        t={t}
        changeLanguage={changeLanguage}
        navigateSearch={navigateSearch}
        navigateMovies={navigateMovies}
        navigateAuth={navigateAuth}
      />
      <div className="main-block">
        <LeftAside
          navigateHome={navigateHome}
          navigateFavorites={navigateFavorites}
          t={t}
        />
        <PageRouter t={t} navigateMovies={navigateMovies} />
      </div>
    </div>
  );
};

export default App;
