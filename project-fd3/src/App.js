import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import LeftAside from "./components/LeftAside/LeftAside";
import Home from "./components/Home/Home";
import MoviesList from "./components/MoviesList/MoviesList";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Linlk,
} from "react-router-dom";

const App = () => {
  const [showHomeScreen, setShowHomeScreen] = useState(false);
  const [showLoadMore, setShowLoadMore] = useState(true);
  const [startList, setSaveList] = useState([]);

  const transferMovieList = (newData) => {
    setSaveList(newData);
  };

  const handleClickShow = () => {
    setShowHomeScreen(false);
    setShowLoadMore(true);
  };

  const handleClickHome = () => {
    setShowHomeScreen(true);
  };

  return (
    <div className="container">
      <Header startList={startList} transferMovieList={transferMovieList} />
      <div className="main-block">
        <LeftAside handleClickHome={handleClickHome} />
        {showHomeScreen ? (
          <Home handleClickShow={handleClickShow} />
        ) : (
          <MoviesList
            startList={startList}
            transferMovieList={transferMovieList}
            showLoadMore={showLoadMore}
            setShowLoadMore={setShowLoadMore}
          />
        )}
      </div>
    </div>
  );
};

export default App;
