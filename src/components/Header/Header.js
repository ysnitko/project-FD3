import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logoSvg from "../../helpers/img/logo.svg";
import langSvg from "../../helpers/img/lang.svg";

const Header = ({
  navigateMovies,
  setSearchMovies,
  navigateSearch,
  movieList,
}) => {
  console.log("render Header");

  const searchRef = useRef(null);

  const searchMovies = (event) => {
    event.preventDefault();
    let searchRefValue = searchRef.current.value;
    if (searchRef.current && searchRefValue !== "") {
      const filtered = movieList.filter((item) =>
        item.name.toLowerCase().includes(searchRefValue.toLowerCase())
      );
      setSearchMovies(filtered);
      navigateSearch();
    } else {
      navigateMovies();
    }
    searchRefValue = "";
  };

  return (
    <div className="main-header">
      <Link className="logo" to={`/`}>
        <img src={logoSvg} alt="logo" />
        <span>Filmagnet</span>
      </Link>
      <form action="" onSubmit={searchMovies}>
        <input
          ref={searchRef}
          className="search"
          type="search"
          name=""
          defaultValue=""
          placeholder="search..."
        />
      </form>

      <div className="sign-lang-section">
        <div className="langusges-select">
          <img src={langSvg} alt="languages" />
          <select>
            <option value="En">En</option>
            <option value="Ru">Ru</option>
            <option value="Au">Au</option>
            <option value="Sp">Sp</option>
          </select>
        </div>
        <button className="sign-btn" type="button">
          SIGN IN
        </button>
      </div>
    </div>
  );
};
export default React.memo(Header);
