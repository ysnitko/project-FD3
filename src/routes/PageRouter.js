import React from 'react';
import Home from '../pages/Home/Home';
import MoviesList from '../pages/MoviesList/MoviesList';
import About from '../pages/About/About';
import FavoriteMovies from '../pages/FavoriteMovies/FavoriteMovies';
import { Routes, Route } from 'react-router-dom';
import Search from '../pages/Search/Search';
import NotFound from '../pages/NotFound/NotFound';

const PagesRouter = ({ navigateMovies, t }) => {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<Home t={t} navigateMovies={navigateMovies} />}
      />
      <Route
        exact
        path="/movies/:category/:page"
        element={<MoviesList t={t} navigateMovies={navigateMovies} />}
      />
      <Route exact path="/favorites" element={<FavoriteMovies t={t} />} />
      <Route exact path="/search" element={<Search t={t} />} />
      <Route path="/movies/about/:id" element={<About t={t} />} />
      <Route path="/*" element={<NotFound t={t} />} />
    </Routes>
  );
};

export default React.memo(PagesRouter);
