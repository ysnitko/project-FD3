import React, { useEffect } from 'react';
import './Pagination.css';

const Pagination = ({
  movieList,
  setRenderedList,
  updatedList,
  isFiltered,
  setCurrentPage,
  currentPage,
}) => {
  const perPage = 15;

  useEffect(() => {
    let paginatedMovieList = (isFiltered ? updatedList : movieList).slice(
      (currentPage - 1) * perPage,
      currentPage * perPage
    );
    console.log(isFiltered);

    setRenderedList(paginatedMovieList);
  }, [
    setRenderedList,
    perPage,
    currentPage,
    updatedList,
    isFiltered,
    movieList,
  ]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [isFiltered, setCurrentPage]);

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
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
