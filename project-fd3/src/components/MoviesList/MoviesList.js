import React, { useEffect, useState } from "react";
import Movie from "../Movie/Movie";
import FilterBar from "../FilterBar/FilterBar";
import "./MoviesList.css";

const MoviesList = () => {
  const [movieList, setMovieList] = useState([]);
  const [loadedMovies, setLoadedMovies] = useState([]);
  const [showLoadMore, setShowLoadMore] = useState(true);
  console.log("render");
  useEffect(() => {
    const fetchData = async () => {
      const url = "https://api.tvmaze.com/shows";
      const response = await fetch(url);
      const result = await response.json();
      const initialMovies = result.slice(0, 15);
      setMovieList(result);
      setLoadedMovies(initialMovies);
    };
    fetchData();
  }, []);

  const handleClickMore = () => {
    const newLoadedMovies = [...loadedMovies];
    const remainingMovies = movieList.slice(newLoadedMovies.length);
    const nextMovies = remainingMovies.slice(0, 15);

    newLoadedMovies.push(...nextMovies);
    if (newLoadedMovies.length >= movieList.length) {
      setShowLoadMore(false);
    }
    setLoadedMovies(newLoadedMovies);
  };

  console.log(loadedMovies);
  return (
    <div className="movies-container">
      <FilterBar />
      <ul className="movies-list">
        {loadedMovies.map((movie) => (
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
