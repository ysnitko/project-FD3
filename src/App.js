import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from './components/Header/Header';
import LeftAside from './components/LeftAside/LeftAside';
import { useNavigate } from 'react-router-dom';
import PageRouter from './routes/PageRouter';
import { useTranslation } from 'react-i18next';
import { setPageNumbers } from './redux/actions/pageNumAc';
import { setCategoryTypes } from './redux/actions/categoryAC';
import './App.css';

const App = () => {
  const store = useSelector((store) => store);
  console.log(store);
  // console.log('render App');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
    console.log(event.target.value);
  };
  const navigateHome = () => {
    dispatch(setCategoryTypes('All'));
    dispatch(setPageNumbers(1));
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
        navigateSearch={navigateSearch}
        navigateMovies={navigateMovies}
      />
      <div className="main-block">
        <LeftAside
          navigateHome={navigateHome}
          navigateFavorites={navigateFavorites}
        />
        <PageRouter
          t={t}
          // isShowLoader={isShowLoader}
          // setIsShowLoader={setIsShowLoader}
          navigateMovies={navigateMovies}
        />
      </div>
    </div>
  );
};

export default App;
