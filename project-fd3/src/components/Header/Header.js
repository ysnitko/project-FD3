import React, { useState } from "react";
import "./Header.css";
import logoSvg from "../../helpers/img/logo.svg";
import langSvg from "../../helpers/img/lang.svg";

const Header = ({ saveList, setSaveList }) => {
  const [searchValue, setSearchValue] = useState("");

  const searchMovies = (event) => {
    setSearchValue(event.target.value);
    const filtered = saveList.filter((movie) =>
      movie.name.toLowerCase().includes(searchValue.toLocaleLowerCase())
    );
    setSaveList(filtered);
  };

  return (
    <div className="main-header">
      <div className="logo">
        <img src={logoSvg} alt="logo" />
        <span>Filmagnet</span>
      </div>
      <form action="">
        <input
          className="search"
          type="search"
          name=""
          value={searchValue}
          placeholder="search..."
          onChange={searchMovies}
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

export default Header;
