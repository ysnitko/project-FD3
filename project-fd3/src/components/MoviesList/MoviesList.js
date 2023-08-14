import React, { useEffect, useState } from "react";
import Movie from "../Movie/Movie";
import FilterBar from "../FilterBar/FilterBar";
import "./MoviesList.css";
import { Link } from "react-router-dom";
import Pagination from "../Pagination/Pagination";
import LoadinSpinner from "../LoadingSpinner/LoadinSpinner";

const MoviesList = ({
  setIsShowLoader,
  isShowLoader,
  renderList,
  setRenderedList,
  isSearch,
}) => {
  console.log("rendering MoviesList");
  const [movieList, setMovieList] = useState([]);
  const [updatedList, setUpdatedList] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setIsShowLoader(true);
      const url = `https://api.tvmaze.com/shows`;
      const response = await fetch(url);
      const result = await response.json();
      setIsShowLoader(false);
      setMovieList(result);
      console.log(isFiltered);
    };
    fetchData();
  }, [setIsShowLoader, isFiltered]);

  return (
    <div className="movies-container">
      <div>
        <FilterBar
          setCurrentPage={setCurrentPage}
          setIsFiltered={setIsFiltered}
          isFiltered={isFiltered}
          setUpdatedList={setUpdatedList}
          movieList={movieList}
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
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              isFiltered={isFiltered}
              setRenderedList={setRenderedList}
              movieList={movieList}
              updatedList={updatedList}
              isSearch={isSearch}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MoviesList;
