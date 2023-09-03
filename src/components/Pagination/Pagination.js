import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPageNumbers } from '../../redux/actions/pageNumAc';
import './Pagination.css';

const Pagination = ({
  movieList,
  setRenderedList,
  updatedList,
  isFiltered,
  currentCategory,
  navigateMovies,
}) => {
  // console.log('rendering Pagination');
  const perPage = 15;
  const currentPage = useSelector(
    (store) => store?.setPageNumbersReducer?.currentPage
  );
  const dispatch = useDispatch();

  useEffect(() => {
    let paginatedMovieList = (isFiltered ? updatedList : movieList).slice(
      (currentPage - 1) * perPage,
      currentPage * perPage
    );
    setRenderedList(paginatedMovieList);
  }, [setRenderedList, currentPage, updatedList, isFiltered, movieList]);

  useEffect(() => {
    dispatch(setPageNumbers(1));
  }, [dispatch]);

  const handlePageChange = (currentCategory, page) => {
    dispatch(setPageNumbers(page));
    navigateMovies(currentCategory, page);
  };

  const numPages = isFiltered
    ? Math.ceil(updatedList.length / perPage)
    : Math.ceil(movieList.length / perPage);

  return (
    <div className="pagination-buttons">
      {Array.from({ length: numPages }, (_, index) => (
        <button
          key={index + 1}
          className={`pagination-btn ${
            currentPage === index + 1 ? 'active-btn' : ''
          }`}
          onClick={() => handlePageChange(currentCategory, index + 1)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default React.memo(Pagination);
