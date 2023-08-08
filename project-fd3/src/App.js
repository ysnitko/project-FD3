import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import LeftAside from './components/LeftAside/LeftAside';
import Home from './components/Home/Home';
import MoviesList from './components/MoviesList/MoviesList';

const App = () => {
  const [showHomeScreen, setShowHomeScreen] = useState(false);
  const [showLoadMore, setShowLoadMore] = useState(true);

  const handleClickShow = () => {
    setShowHomeScreen(false);
    setShowLoadMore(true);
  };

  const handleClickHome = () => {
    setShowHomeScreen(true);
  };

  return (
    <div className="container">
      <Header />
      <div className="main-block">
        <LeftAside handleClickHome={handleClickHome} />
        {showHomeScreen ? (
          <Home handleClickShow={handleClickShow} />
        ) : (
          <MoviesList
            showLoadMore={showLoadMore}
            setShowLoadMore={setShowLoadMore}
          />
        )}
      </div>
    </div>
  );
};

export default App;
