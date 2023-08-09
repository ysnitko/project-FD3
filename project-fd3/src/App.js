import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import LeftAside from './components/LeftAside/LeftAside';
import Home from './components/Home/Home';
import MoviesList from './components/MoviesList/MoviesList';
import About from './components/About/About';
import { Routes, Route, Navigate } from 'react-router-dom';

const App = () => {
  const [showHomeScreen, setShowHomeScreen] = useState(false);
  const [showLoadMore, setShowLoadMore] = useState(true);
  const [startList, setSaveList] = useState([]);

  const transferMovieList = (newData) => {
    setSaveList(newData);
  };

  const handleClickShow = () => {
    setShowHomeScreen(true);
    setShowLoadMore(true);
  };

  const handleClickHome = () => {
    setShowHomeScreen(true);
  };

  return (
    <div className="container">
      <Header startList={startList} transferMovieList={transferMovieList} />
      <div className="main-block">
        <LeftAside />
        <Routes>
          <Route
            exact
            path="/"
            element={
              showHomeScreen ? (
                <Navigate to="/movies" />
              ) : (
                <Home
                  handleClickHome={handleClickHome}
                  handleClickShow={handleClickShow}
                />
              )
            }
          />
          <Route
            exact
            path="/movies"
            element={
              <MoviesList
                startList={startList}
                transferMovieList={transferMovieList}
                showLoadMore={showLoadMore}
                setShowLoadMore={setShowLoadMore}
              />
            }
          />
          <Route path="/movies/about/:id" element={<About />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
