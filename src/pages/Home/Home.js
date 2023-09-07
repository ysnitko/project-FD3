import React from 'react';
import { useSelector } from 'react-redux';
import './Home.css';
import calendarIcons from '../../helpers/img/calendar-icon.svg';

const Home = ({ navigateMovies, t }) => {
  const currentPage = useSelector(
    (store) => store?.setPageNumbersReducer?.currentPage
  );
  const currentCategory = useSelector(
    (store) => store?.setCategoryReducer?.currentCategory
  );

  return (
    <div className="home-screen">
      <div className="title">
        <span className="Filmagnet">Filmagnet</span>
        <span className="Unlimited">
          {t('Unlimited')}
          <span className="Entertainment">{t('Entertainment')}</span>
        </span>
        <span className="Movies">{t('Movies, TVs shows, & More.')}</span>
      </div>
      <div className="movie-info-row">
        <span className="movie-lbl">Movie</span>
        <span className="hd-lbl">HD</span>
        <span className="category-movie">{t('Action, Drama')}</span>
        <div className="date-realese">
          <img src={calendarIcons} alt="calendar" />
          <span>2023</span>
        </div>
      </div>
      <button
        className="play-now"
        type=""
        onClick={() => navigateMovies(currentCategory, currentPage)}
      >
        {t('SHOW NOW')}
      </button>
    </div>
  );
};

export default Home;
