import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import LeftAside from './components/LeftAside/LeftAside';
import MoviesList from './components/MoviesList/MoviesList';

const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="main-block">
        <LeftAside />
        <MoviesList />
      </div>
    </div>
  );
};

export default App;
