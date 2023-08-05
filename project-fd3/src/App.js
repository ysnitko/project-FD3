import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://api.tvmaze.com/shows';

      try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);
        setMovieList(result);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <ul className="App">
      {movieList.map((movie) => (
        <li key={movie.id}>
          <span>{movie.name}</span>
          <img src={movie.image.medium} alt={'s'} />
          <span>{movie.ended}</span>
          <span>{movie.genres}</span>
        </li>
      ))}
    </ul>
  );
}

export default App;
