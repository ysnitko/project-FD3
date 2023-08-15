import React, { useEffect } from "react";
import "./Pagination.css";

const Pagination = ({
  movieList,
  setRenderedList,
  updatedList,
  isFiltered,
  setCurrentPage,
  currentPage,
  currentCategory,
  navigateMovies,
}) => {
  console.log("rendering Pagination");
  const perPage = 15;

  useEffect(() => {
    let paginatedMovieList = (isFiltered ? updatedList : movieList).slice(
      (currentPage - 1) * perPage,
      currentPage * perPage
    );

    setRenderedList(paginatedMovieList);
  }, [setRenderedList, currentPage, updatedList, isFiltered, movieList]);

  useEffect(() => {
    setCurrentPage(1);
  }, [setCurrentPage]);

  const handlePageChange = (currentCategory, page) => {
    setCurrentPage(page);
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
            currentPage === index + 1 ? "active-btn" : ""
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
