import React from "react";
import "./FilterBar.css";

const FilterBar = () => {
  return (
    <div className="filter-block">
      <div className="block-title">
        <span className="online-streaming">ONLINE STREAMING</span>
        <span className="upcoming-movies">Upcoming Movies</span>
      </div>
      <div className="filters">
        <div className="category-select">
          <span>choose category:</span>
          <select>
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
          <select>
            <option value="by-title">title A-Z</option>
            <option value="by-title">title Z-A</option>
            <option value="by-status">Ended</option>
            <option value="Sp">Running</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
