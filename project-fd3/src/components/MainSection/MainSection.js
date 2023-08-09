import React, { useState } from "react";
import "./MainSection.css";
import LeftAside from "../LeftAside/LeftAside";
import HomeScreen from "../HomeScreen/HomeScreen";
import MoviesList from "../../components/MoviesList/MoviesList";

const MainSection = () => {
  const [showHomeScreen, setShowHomeScreen] = useState(true);

  const handleClickShow = () => {
    setShowHomeScreen(false);
  };

  const handleClickHome = () => {
    setShowHomeScreen(true);
  };

  return (
    <div className="main-block">
      <LeftAside handleClickHome={handleClickHome} />
      {showHomeScreen ? (
        <HomeScreen handleClickShow={handleClickShow} />
      ) : (
        <MoviesList />
      )}
    </div>
  );
};

export default MainSection;
