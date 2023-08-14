import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import LeftAside from './components/LeftAside/LeftAside';
import Home from './components/Home/Home';
import MoviesList from './components/MoviesList/MoviesList';
import About from './components/About/About';
import FavoriteMovies from './components/FavoriteMovies/FavoriteMovies';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Search from './components/Search/Search';

const App = () => {
  console.log('render App');
  const [isShowLoader, setIsShowLoader] = useState(false);
  const [renderList, setRenderedList] = useState([]);
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [searchMovies, setSearchMovies] = useState([]);
  const [movieList, setMovieList] = useState([]);

  const navigate = useNavigate();

  const navigateHome = () => {
    navigate('/');
  };

  const navigateMovies = () => {
    navigate('/movies');
  };

  const navigateFavorites = () => {
    navigate('/favorites');
  };

  const navigateSearch = () => {
    navigate('/search');
  };

  return (
    <div className="container">
      <Header
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
                movieList={movieList}
                setMovieList={setMovieList}
                renderList={renderList}
                setRenderedList={setRenderedList}
                isShowLoader={isShowLoader}
                setIsShowLoader={setIsShowLoader}
              />
            }
          />
          <Route
            exact
            path="/favorites"
            element={<FavoriteMovies favoriteMovies={favoriteMovies} />}
          />
          <Route
            exact
            path="/search"
            element={<Search searchMovies={searchMovies} />}
          />
          <Route
            path="/movies/about/:id"
            element={
              <About
                isShowLoader={isShowLoader}
                setIsShowLoader={setIsShowLoader}
                setFavoriteMovies={setFavoriteMovies}
                favoriteMovies={favoriteMovies}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
