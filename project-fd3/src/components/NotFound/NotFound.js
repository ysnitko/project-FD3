import React from "react";
import Arrow from "../../helpers/img/Arrow.svg";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="notfound-container">
      <Link className="previouse-page" to={`/movies/All/1`}>
        <img src={Arrow} alt="arrow-left" /> <span>Back</span>
      </Link>
      <span className="notfound-text">Sorry...Page not found</span>
    </div>
  );
};

export default React.memo(NotFound);
