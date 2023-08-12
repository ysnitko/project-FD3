import React, { useEffect, useState } from 'react';
import Movie from '../Movie/Movie';
import FilterBar from '../FilterBar/FilterBar';
import './MoviesList.css';
import { Link } from 'react-router-dom';
import Paginat from '../Paginat/Paginat';

import LoadinSpinner from '../LoadingSpinner/LoadinSpinner';

const MoviesList = ({ setShowLoadMore, setIsShowLoader, isShowLoader }) => {
  const [movieList, setMovieList] = useState([]);

  const [renderList, setRenderedList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsShowLoader(true);
      const url = `https://api.tvmaze.com/shows`;
      const response = await fetch(url);
      const result = await response.json();
      setIsShowLoader(false);
      setMovieList(result);
      setShowLoadMore(true);
    };
    fetchData();
  }, [setIsShowLoader, setShowLoadMore]);
  console.log(movieList);

  return (
    <div className="movies-container">
      <div>
        <FilterBar
          movieList={movieList}
          setMovieList={setMovieList}
          setShowLoadMore={setShowLoadMore}
          setRenderedList={setRenderedList}
        />
        {isShowLoader ? (
          <LoadinSpinner />
        ) : (
          <div>
            <ul className="movies-list">
              {renderList.map((movie) => (
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
            <Paginat setRenderedList={setRenderedList} movieList={movieList} />
          </div>
        )}
      </div>
    </div>
  );
};

export default MoviesList;
