import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logoSvg from '../../helpers/img/logo.svg';
import langSvg from '../../helpers/img/lang.svg';

const Header = ({ setRenderedList, renderList }) => {
  console.log('render Header');
  const [searchValue, setSearchValue] = useState('');

  const searchMovies = (event) => {
    event.preventDefault();
    setSearchValue(event.target.value);
    if (event.target.value === '') {
      setRenderedList(renderList);
    }
    const filtered = renderList.filter((movie) =>
      movie.name.toLowerCase().includes(searchValue.toLocaleLowerCase())
    );
    setRenderedList(filtered);
  };

  return (
    <div className="main-header">
      <Link className="logo" to={`/`}>
        <img src={logoSvg} alt="logo" />
        <span>Filmagnet</span>
      </Link>
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

export default React.memo(Header);
