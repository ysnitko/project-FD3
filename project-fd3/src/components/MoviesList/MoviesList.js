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
  movieList,
  setMovieList,
  navigateMovies,
  setCurrentPage,
  currentPage,
  setCategory,
  currentCategory,
}) => {
  console.log("rendering MoviesList");

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
  }, [setIsShowLoader, isFiltered, setMovieList]);

  return (
    <div className="movies-container">
      <div>
        <FilterBar
          currentPage={currentPage}
          setCategory={setCategory}
          setCurrentPage={setCurrentPage}
          setIsFiltered={setIsFiltered}
          isFiltered={isFiltered}
          setUpdatedList={setUpdatedList}
          movieList={movieList}
          navigateMovies={navigateMovies}
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
              currentCategory={currentCategory}
              navigateMovies={navigateMovies}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
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

export default React.memo(MoviesList);
