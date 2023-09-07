import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchList } from '../../redux/actions/movieListAC';
import './Header.css';
import logoSvg from '../../helpers/img/logo.svg';
import langSvg from '../../helpers/img/lang.svg';

const Header = ({ navigateMovies, navigateSearch, changeLanguage, t }) => {
  // console.log("render Header");
  const movieList = useSelector(
    (store) => store?.setMovieListReducer?.movieList
  );
  const dispatch = useDispatch();
  const searchRef = useRef(null);

  const searchMovies = (event) => {
    event.preventDefault();
    let searchRefValue = searchRef.current.value;
    if (searchRef.current && searchRefValue !== '') {
      const filtered = movieList.filter((item) =>
        item.name.toLowerCase().includes(searchRefValue.toLowerCase())
      );
      dispatch(setSearchList(filtered));
      navigateSearch();
    } else {
      navigateMovies();
    }
    searchRefValue = '';
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
          <select onChange={changeLanguage}>
            <option value="en">{t('En')}</option>
            <option value="ru">{t('Ru')}</option>
          </select>
        </div>
        <button className="sign-btn" type="button">
          {t('SIGN IN')}
        </button>
      </div>
    </div>
  );
};
export default React.memo(Header);
