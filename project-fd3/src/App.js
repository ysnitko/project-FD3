import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import LeftAside from './components/LeftAside/LeftAside';
import Home from './components/Home/Home';
import MoviesList from './components/MoviesList/MoviesList';
import About from './components/About/About';
import FavoriteMovies from './components/FavoriteMovies/FavoriteMovies';

import { Routes, Route, useNavigate } from 'react-router-dom';

const App = () => {
  console.log('render App');
  const [isShowLoader, setIsShowLoader] = useState(false);
  const [renderList, setRenderedList] = useState([]);
  const [isShowFavorite, setIsShowFavorite] = useState(false);
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  const navigate = useNavigate();

  const navigateHome = () => {
    navigate('/');
  };

  const navigateMovies = () => {
    navigate('/movies');
  };

  return (
    <div className="container">
      <Header renderList={renderList} setRenderedList={setRenderedList} />
      <div className="main-block">
        <LeftAside
          navigateHome={navigateHome}
          isShowFavorite={isShowFavorite}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={<Home navigateMovies={navigateMovies} />}
          />
          <Route
            exact
            path="/movies"
            element={
              <MoviesList
                renderList={renderList}
                setRenderedList={setRenderedList}
                isShowLoader={isShowLoader}
                setIsShowLoader={setIsShowLoader}
              />
            }
          />
          <Route
            exact
            path="/favorite"
            element={<FavoriteMovies favoriteMovies={favoriteMovies} />}
          />
          <Route
            path="/movies/about/:id"
            element={
              <About
                isShowLoader={isShowLoader}
                setIsShowLoader={setIsShowLoader}
                setIsShowFavorite={setIsShowFavorite}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
