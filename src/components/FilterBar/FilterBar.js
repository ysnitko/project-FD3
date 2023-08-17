import React, { useEffect, useState } from "react";
import "./FilterBar.css";

const FilterBar = ({
  movieList,
  setUpdatedList,
  setIsFiltered,
  isFiltered,
  setCurrentPage,
  navigateMovies,
  setCategory,
  currentPage,
  t,
}) => {
  console.log("render FilterBar");

  const [filteredMovieList, setFilteredMovieList] = useState([]);

  useEffect(() => {
    setCurrentPage(1);
  }, [setCurrentPage]);

  const handleSort = (event) => {
    const sortedList = isFiltered ? [...filteredMovieList] : [...movieList];
    if (event.target.value === "by-title") {
      sortedList.sort((a, b) => {
        return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
      });
    }

    if (event.target.value === "by-title-reverse") {
      sortedList.sort((a, b) => {
        return a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1;
      });
    }

    if (event.target.value === "by-rating-start") {
      sortedList.sort((a, b) => {
        return a.rating.average > b.rating.average ? 1 : -1;
      });
    }

    if (event.target.value === "by-rating-end") {
      sortedList.sort((a, b) => {
        return a.rating.average > b.rating.average ? -1 : 1;
      });
    }
    setFilteredMovieList(sortedList);
    setUpdatedList(sortedList);
    setIsFiltered(true);
  };

  const handleChooseCategory = (event) => {
    let selectedCategory = event.target.value;
    let filteredList = movieList.filter((movie) =>
      movie.genres.includes(selectedCategory)
    );

    if (selectedCategory === "All") {
      filteredList = [...movieList];
      setFilteredMovieList(movieList);
    }

    setCategory(selectedCategory);
    setCurrentPage(1);
    navigateMovies(selectedCategory, (currentPage = 1));
    setIsFiltered(true);
    setUpdatedList(filteredList);
    setFilteredMovieList(filteredList);
  };

  return (
    <div className="filter-block">
      <div className="block-title">
        <span className="online-streaming">{t("ONLINE STREAMING")}</span>
        <span className="upcoming-movies">{t("Upcoming Movies")}</span>
      </div>
      <div className="filters">
        <div className="category-select">
          <span>{t("category")}:</span>
          <select onChange={handleChooseCategory}>
            <option value="All">{t("All")}</option>
            <option value="Action">{t("Action")}</option>
            <option value="Crime">{t("Crime")}</option>
            <option value="Drama">{t("Drama")}</option>
            <option value="Espionage">{t("Espionage")}</option>
            <option value="Fantasy">{t("Fantasy")}</option>
            <option value="Horror">{t("Horror")}</option>
            <option value="Music">{t("Music")}</option>
            <option value="Mystery">{t("Mystery")}</option>
            <option value="Romance">{t("Romance")}</option>
            <option value="Supernatural">{t("Supernatural")}</option>
            <option value="Thriller">{t("Thriller")}</option>
          </select>
        </div>
        <div className="sort-select">
          <span>{t("sort by")}:</span>
          <select onChange={handleSort}>
            <option value="by-title">{t("title A-Z")}</option>
            <option value="by-title-reverse">{t("title Z-A")}</option>
            <option value="by-rating-start">{t("Rating")} 0-9</option>
            <option value="by-rating-end">{t("Rating")} 9-0</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default React.memo(FilterBar);
