import React, { useEffect, useState } from 'react';

const MoviesList = () => {
  const [movieList, setMovieList] = useState([]);
  const [loadedMovies, setLoadedMovies] = useState([]);
  const [showLoadMore, setShowLoadMore] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://api.tvmaze.com/shows';
      try {
        const response = await fetch(url);
        const result = await response.json();

        const initialMovies = result.slice(0, 10);
        setMovieList(result);
        setLoadedMovies(initialMovies);

        if (initialMovies.length >= result.length) {
          setShowLoadMore(false);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleClickMore = () => {
    const newLoadedMovies = [...loadedMovies];
    const remainingMovies = movieList.slice(newLoadedMovies.length);
    const nextMovies = remainingMovies.slice(0, 10);

    newLoadedMovies.push(...nextMovies);
    if (newLoadedMovies.length >= movieList.length) {
      setShowLoadMore(false);
    }
    setLoadedMovies(newLoadedMovies);
  };

  console.log(loadedMovies);
  return (
    <div>
      <ul className="">
        {loadedMovies.map((movie) => (
          <li key={movie.id}>
            <span>{movie.name}</span>
            <img src={movie.image.medium} alt={'s'} />
            <span>{movie.ended}</span>
            <span>{movie.genres}</span>
          </li>
        ))}
      </ul>
      {showLoadMore && (
        <button id="loadMoreCharacters" onClick={handleClickMore}>
          Load More
        </button>
      )}
    </div>
  );
};

export default MoviesList;
