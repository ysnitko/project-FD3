import React from "react";
import Arrow from "../../helpers/img/Arrow.svg";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = ({ t }) => {
  return (
    <div className="notfound-container">
      <Link className="previouse-page" to={`/movies/All/1`}>
        <img src={Arrow} alt="arrow-left" /> <span>{t("To movies list")}</span>
      </Link>
      <span className="notfound-text">{t("Oops...Page not found")}</span>
    </div>
  );
};

export default NotFound;
