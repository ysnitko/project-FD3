import React, { useEffect, useState } from 'react';
import Movie from '../Movie/Movie';
import FilterBar from '../FilterBar/FilterBar';
import './MoviesList.css';

const MoviesList = ({ showLoadMore, setShowLoadMore }) => {
  console.log('render');
  const [startList, setStartList] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const [shownMovies, setShownMovies] = useState(15);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://api.tvmaze.com/shows';
      const response = await fetch(url);
      const result = await response.json();
      const initialMovies = result.slice(0, 15);
      setMovieList(result);
      setStartList(initialMovies);
    };
    fetchData();
  }, []);

  const handleClickMore = () => {
    const nextMovies = [...movieList].slice(shownMovies, shownMovies + 15);
    setStartList((prevMovies) => [...prevMovies, ...nextMovies]);
    setShownMovies((prevCount) => prevCount + 15);

    if (startList.length >= movieList.length) {
      setShowLoadMore(false);
    }
  };

  return (
    <div className="movies-container">
      <FilterBar />
      <ul className="movies-list">
        {startList.map((movie) => (
          <Movie
            key={movie.id}
            imageCover={movie.image.medium}
            name={movie.name}
            status={movie.status}
            runtime={movie.runtime}
            rating={movie.rating.average}
          />
        ))}
      </ul>
      {showLoadMore && (
        <button className="loadMoreMovies" onClick={handleClickMore}>
          Load More
        </button>
      )}
    </div>
  );
};

export default MoviesList;
