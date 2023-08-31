import React, { useCallback, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import LeftAside from './components/LeftAside/LeftAside';
import { useNavigate } from 'react-router-dom';
import PageRouter from './routes/PageRouter';
import { useTranslation } from 'react-i18next';

const App = () => {
  console.log('render App');
  const [isShowLoader, setIsShowLoader] = useState(false);
  const [renderList, setRenderedList] = useState([]);
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [searchMovies, setSearchMovies] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentCategory, setCategory] = useState(['All']);

  const navigate = useNavigate();

  const { t, i18n } = useTranslation();
  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
    console.log(event.target.value);
  };
  const navigateHome = () => {
    setCategory('All');
    setCurrentPage(1);
    navigate('/');
  };

  const navigateMovies = useCallback(
    (category, page) => {
      if (typeof category !== `string`) {
        category = 'All';
      }
      navigate(`/movies/${category}/${page}`);
    },
    [navigate]
  );

  const navigateFavorites = () => {
    navigate('/favorites');
  };

  const navigateSearch = () => {
    navigate('/search');
  };

  return (
    <div className="container">
      <Header
        t={t}
        changeLanguage={changeLanguage}
        movieList={movieList}
        setRenderedList={setRenderedList}
        navigateSearch={navigateSearch}
        setSearchMovies={setSearchMovies}
        navigateMovies={navigateMovies}
      />
      <div className="main-block">
        <LeftAside
          navigateHome={navigateHome}
          navigateFavorites={navigateFavorites}
          favoriteMovies={favoriteMovies}
        />
        <PageRouter
          t={t}
          setCategory={setCategory}
          movieList={movieList}
          renderList={renderList}
          setRenderedList={setRenderedList}
          isShowLoader={isShowLoader}
          setIsShowLoader={setIsShowLoader}
          favoriteMovies={favoriteMovies}
          setFavoriteMovies={setFavoriteMovies}
          navigateMovies={navigateMovies}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          searchMovies={searchMovies}
          setMovieList={setMovieList}
          currentCategory={currentCategory}
        />
      </div>
    </div>
  );
};

export default App;
