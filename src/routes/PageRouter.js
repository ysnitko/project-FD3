import React from 'react';
import Home from '../components/Home/Home';
import MoviesList from '../components/MoviesList/MoviesList';
import About from '../components/About/About';
import FavoriteMovies from '../components/FavoriteMovies/FavoriteMovies';
import { Routes, Route } from 'react-router-dom';
import Search from '../components/Search/Search';
import NotFound from '../components/NotFound/NotFound';

const PagesRouter = ({
  renderList,
  setRenderedList,
  isShowLoader,
  setIsShowLoader,
  favoriteMovies,
  setFavoriteMovies,
  navigateMovies,
  currentPage,
  setCurrentPage,
  movieList,
  searchMovies,
  setMovieList,
  currentCategory,
  setCategory,
  t,
}) => {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <Home
            t={t}
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
            t={t}
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
        element={<FavoriteMovies favoriteMovies={favoriteMovies} t={t} />}
      />
      <Route
        exact
        path="/search"
        element={<Search searchMovies={searchMovies} t={t} />}
      />
      <Route
        path="/movies/about/:id"
        element={
          <About
            t={t}
            isShowLoader={isShowLoader}
            setIsShowLoader={setIsShowLoader}
            setFavoriteMovies={setFavoriteMovies}
            favoriteMovies={favoriteMovies}
          />
        }
      />
      <Route path="/*" element={<NotFound t={t} />} />
    </Routes>
  );
};

export default React.memo(PagesRouter);
