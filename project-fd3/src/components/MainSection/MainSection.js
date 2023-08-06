import React from 'react';
import './MainSection.css';
import LeftAside from '../LeftAside/LeftAside';
import HomeScreen from '../HomeScreen/HomeScreen';

const MainSection = () => {
  return (
    <div className="main-block">
      <LeftAside />
      <HomeScreen />
    </div>
  );
};

export default MainSection;
