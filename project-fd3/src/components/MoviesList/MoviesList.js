import React, { useCallback, useEffect, useRef, useState } from "react";
import Movie from "../Movie/Movie";
import FilterBar from "../FilterBar/FilterBar";
import "./MoviesList.css";
import { Link } from "react-router-dom";
import LoadinSpinner from "../LoadingSpinner/LoadinSpinner";

const MoviesList = ({
  showLoadMore,
  setShowLoadMore,
  setIsShowLoader,
  isShowLoader,
}) => {
  const [startList, setStartList] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const [shownMovies, setShownMovies] = useState(15);
  const [scrollToLast, setScrollToLast] = useState([]);
  const lastMovie = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsShowLoader(true);
      const url = "https://api.tvmaze.com/shows";
      const response = await fetch(url);
      const result = await response.json();
      const initialMovies = result.slice(0, 15);
      setIsShowLoader(false);
      setMovieList(result);
      setStartList(initialMovies);
    };
    fetchData();
  }, [setIsShowLoader]);

  useEffect(() => {
    if (lastMovie.current) {
      lastMovie.current.scrollTop = lastMovie.current.scrollHeight;
    }
  }, [scrollToLast]);

  const scrollToLastMovie = useCallback(() => {
    console.log("scroll to last");
    setScrollToLast(startList);
    if (lastMovie.current) {
      lastMovie.current.scrollTop = lastMovie.current.scrollHeight;
    }
  }, [startList]);

  const handleClickMore = useCallback(() => {
    const nextMovies = [...movieList].slice(shownMovies, shownMovies + 5);
    setStartList((prevMovies) => [...prevMovies, ...nextMovies]);
    setShownMovies((prevCount) => prevCount + 5);

    if (startList.length >= movieList.length) {
      setShowLoadMore(false);
    }
    scrollToLastMovie();
  }, [
    movieList,
    setShowLoadMore,
    shownMovies,
    startList.length,
    scrollToLastMovie,
  ]);

  return (
    <div className="movies-container">
      <FilterBar
        movieList={movieList}
        setStartList={setStartList}
        startList={startList}
        setMovieList={setMovieList}
      />
      {isShowLoader ? (
        <LoadinSpinner />
      ) : (
        <ul className="movies-list" ref={lastMovie}>
          {startList.map((movie) => (
            <Link
              className="movie-link"
              key={movie.id}
              to={`/movies/about/${movie.id}`}
            >
              <Movie
                imageCover={movie.image.medium}
                name={movie.name}
                status={movie.status}
                runtime={movie.runtime}
                rating={movie.rating.average}
                category={movie.genres}
              />
            </Link>
          ))}
        </ul>
      )}
      {showLoadMore && (
        <div className="loadMoreMovies">
          <button className="loadMoreMovies-btn" onClick={handleClickMore}>
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default MoviesList;
