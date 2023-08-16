import React, { useCallback, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import LeftAside from './components/LeftAside/LeftAside';
import { useNavigate } from 'react-router-dom';
import Home from './components/Home/Home';
import MoviesList from './components/MoviesList/MoviesList';
import About from './components/About/About';
import FavoriteMovies from './components/FavoriteMovies/FavoriteMovies';
// import PageRouter from "./routes/PageRouter";
import Search from './components/Search/Search';
import NotFound from './components/NotFound/NotFound';

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
        {/* <PageRouter
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
        /> */}
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                navigateMovies={navigateMovies}
                currentPage={currentPage}
                currentCategory={currentCategory}
              />
            }
          />
          <Route
            exact
            path="/movies/:category/:page"
            element={
              <MoviesList
                setCategory={setCategory}
                currentCategory={currentCategory}
                movieList={movieList}
                setMovieList={setMovieList}
                renderList={renderList}
                setRenderedList={setRenderedList}
                isShowLoader={isShowLoader}
                setIsShowLoader={setIsShowLoader}
                navigateMovies={navigateMovies}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
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
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
