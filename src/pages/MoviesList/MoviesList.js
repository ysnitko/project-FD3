import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setMovieList } from "../../redux/actions/movieListAC";
import { showLoader } from "../../redux/actions/loaderAC";
import "./MoviesList.css";
import { Link } from "react-router-dom";
import Movie from "../../components/Movie/Movie";
import FilterBar from "../../components/FilterBar/FilterBar";
import Pagination from "../../components/Pagination/Pagination";
import LoadinSpinner from "../../components/LoadingSpinner/LoadinSpinner";

const MoviesList = ({ navigateMovies, t }) => {
  const [isFiltered, setIsFiltered] = useState(false);
  const renderList = useSelector(
    (store) => store?.setMovieListReducer?.renderList
  );
  const isShowLoader = useSelector(
    (store) => store?.showLoaderReducer?.isShowLoader
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      dispatch(showLoader(true));
      const url = `https://api.tvmaze.com/shows`;
      const response = await fetch(url);
      const result = await response.json();
      dispatch(showLoader(false));
      dispatch(setMovieList(result));
    };
    fetchData();
  }, [isFiltered, dispatch]);

  return (
    <div className="movies-container">
      <div>
        <FilterBar
          setIsFiltered={setIsFiltered}
          isFiltered={isFiltered}
          navigateMovies={navigateMovies}
          t={t}
        />
        {isShowLoader ? (
          <LoadinSpinner />
        ) : (
          <div>
            <div className="movies-list">
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
            </div>
            <Pagination
              navigateMovies={navigateMovies}
              isFiltered={isFiltered}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default React.memo(MoviesList);
