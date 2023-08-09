import React from "react";
import "./FilterBar.css";

const FilterBar = ({ movieList, setStartList, setMovieList }) => {
  const handleSort = (event) => {
    const sortedList = [...movieList];
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

    setMovieList(sortedList);
    setStartList(sortedList.slice(0, 15));
  };

  const handleChooseCategory = (event, category) => {
    let filteredList = [...movieList];
    if (event.target.value === "Action") {
      filteredList = filteredList.filter((movie) =>
        movie.genres.includes(category)
      );
    }

    if (event.target.value === "Adventure") {
      filteredList = filteredList.filter((movie) =>
        movie.genres.includes("Adventure")
      );
    }

    if (event.target.value === "Crime") {
      filteredList = filteredList.filter((movie) =>
        movie.genres.includes("Crime")
      );
    }

    if (event.target.value === "Drama") {
      filteredList = filteredList.filter((movie) =>
        movie.genres.includes("Drama")
      );
    }

    if (event.target.value === "Espionage") {
      filteredList = filteredList.filter((movie) =>
        movie.genres.includes("Espionage")
      );
    }

    if (event.target.value === "Fantasy") {
      filteredList = filteredList.filter((movie) =>
        movie.genres.includes("Fantasy")
      );
    }

    if (event.target.value === "Horror") {
      filteredList = filteredList.filter((movie) =>
        movie.genres.includes("Horror")
      );
    }

    if (event.target.value === "Music") {
      filteredList = filteredList.filter((movie) =>
        movie.genres.includes("Music")
      );
    }

    if (event.target.value === "Music") {
      filteredList = filteredList.filter((movie) =>
        movie.genres.includes("Music")
      );
    }

    if (event.target.value === "Mystery") {
      filteredList = filteredList.filter((movie) =>
        movie.genres.includes("Mystery")
      );
    }

    if (event.target.value === "Romance") {
      filteredList = filteredList.filter((movie) =>
        movie.genres.includes("Romance")
      );
    }

    if (event.target.value === "Science") {
      filteredList = filteredList.filter((movie) =>
        movie.genres.includes("Science")
      );
    }

    if (event.target.value === "Supernatural") {
      filteredList = filteredList.filter((movie) =>
        movie.genres.includes("Supernatural")
      );
    }

    if (event.target.value === "Thriller") {
      filteredList = filteredList.filter((movie) =>
        movie.genres.includes("Thriller")
      );
    }

    console.log(filteredList);
    setMovieList(filteredList);
    setStartList(filteredList.slice(0, 15));
  };

  return (
    <div className="filter-block">
      <div className="block-title">
        <span className="online-streaming">ONLINE STREAMING</span>
        <span className="upcoming-movies">Upcoming Movies</span>
      </div>
      <div className="filters">
        <div className="category-select">
          <span>choose category:</span>
          <select onChange={handleChooseCategory}>
            <option value="Action">Action</option>
            <option value="Adventure">Adventure</option>
            <option value="Crime">Crime</option>
            <option value="Drama">Drama</option>
            <option value="Espionage">Espionage</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Horror">Horror</option>
            <option value="Music">Music</option>
            <option value="Mystery">Mystery</option>
            <option value="Romance">Romance</option>
            <option value="Science">Science</option>
            <option value="Supernatural">Supernatural</option>
            <option value="Thriller">Thriller</option>
          </select>
        </div>
        <div className="sort-select">
          <span>sort by:</span>
          <select onChange={handleSort}>
            <option value="by-title">title A-Z</option>
            <option value="by-title-reverse">title Z-A</option>
            <option value="by-rating-start">Rating 0-9</option>
            <option value="by-rating-end">Rating 9-0</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
