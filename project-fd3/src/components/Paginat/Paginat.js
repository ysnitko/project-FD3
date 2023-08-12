import React, { useState, useCallback, useEffect } from 'react';
import './Paginat.css';

const Paginat = ({ movieList, setRenderedList }) => {
  const [perPage] = useState(15);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const paginatedMovieList = movieList.slice(
      (currentPage - 1) * perPage,
      currentPage * perPage
    );
    setRenderedList(paginatedMovieList);
  }, [setRenderedList, perPage, currentPage, movieList]);

  const handlePageChange = useCallback(
    (page) => {
      setCurrentPage(page);
    },
    [setCurrentPage]
  );
  const numPages = Math.ceil(movieList.length / perPage);
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
