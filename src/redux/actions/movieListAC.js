import {
  SET_MOVIE_LIST,
  SET_RENDERED_LIST,
  SET_SEARCH_LIST,
} from '../constants';

export const setMovieList = (movieList) => {
  return {
    type: SET_MOVIE_LIST,
    payload: movieList,
  };
};

export const setRenderList = (renderList) => {
  return {
    type: SET_RENDERED_LIST,
    payload: renderList,
  };
};

export const setSearchList = (searchMovies) => {
  return {
    type: SET_SEARCH_LIST,
    payload: searchMovies,
  };
};
