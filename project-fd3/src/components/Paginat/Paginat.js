import React, { useState, useCallback, useEffect } from 'react';
import './Paginat.css';

const Paginat = ({
  movieList,
  setRenderedList,
  updatedList,
  setUpdatedList,
  setIsFiltered,
  isFiltered,
}) => {
  const [perPage] = useState(15);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    let paginatedMovieList = (isFiltered ? updatedList : movieList).slice(
      (currentPage - 1) * perPage,
      currentPage * perPage
    );
    console.log(paginatedMovieList);
    console.log(updatedList);
    setRenderedList(paginatedMovieList);
  }, [
    setRenderedList,
    perPage,
    currentPage,
    updatedList,
    isFiltered,
    movieList,
  ]);

  const handlePageChange = useCallback(
    (page) => {
      setCurrentPage(page);
    },
    [setCurrentPage]
  );
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

export default React.memo(Paginat);
