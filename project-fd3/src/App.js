import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import MainSection from './components/MainSection/MainSection';

const App = () => {
  return (
    <div className="container">
      <Header />
      <MainSection />
    </div>
  );
};

export default App;
