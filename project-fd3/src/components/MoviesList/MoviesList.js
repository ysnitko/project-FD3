import React, { useEffect, useState } from 'react';
import Movie from '../Movie/Movie';
import FilterBar from '../FilterBar/FilterBar';
import './MoviesList.css';
import { Link } from 'react-router-dom';
import Paginat from '../Paginat/Paginat';
import LoadinSpinner from '../LoadingSpinner/LoadinSpinner';

const MoviesList = ({ setIsShowLoader, isShowLoader }) => {
  const [movieList, setMovieList] = useState([]);
  const [renderList, setRenderedList] = useState([]);
  const [updatedList, setUpdatedList] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsShowLoader(true);
      const url = `https://api.tvmaze.com/shows`;
      const response = await fetch(url);
      const result = await response.json();
      setIsShowLoader(false);
      setMovieList(result);
    };
    fetchData();
  }, [setIsShowLoader]);

  return (
    <div className="movies-container">
      <div>
        <FilterBar
          setIsFiltered={setIsFiltered}
          isFiltered={isFiltered}
          setUpdatedList={setUpdatedList}
          movieList={movieList}
          setMovieList={setMovieList}
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
            <Paginat
              isFiltered={isFiltered}
              setRenderedList={setRenderedList}
              movieList={movieList}
              updatedList={updatedList}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MoviesList;
