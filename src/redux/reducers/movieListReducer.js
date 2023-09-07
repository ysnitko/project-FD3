import {
  SET_MOVIE_LIST,
  SET_RENDERED_LIST,
  SET_SEARCH_LIST,
  SET_UPDATED_LIST,
} from '../constants';

const setMovieListReducer = (
  state = { movieList: [], renderList: [], searchMovies: [], updatedList: [] },
  { type, payload }
) => {
  switch (type) {
    case SET_MOVIE_LIST:
      return { ...state, movieList: payload };
    case SET_RENDERED_LIST:
      return { ...state, renderList: payload };
    case SET_SEARCH_LIST:
      return { ...state, searchMovies: payload };
    case SET_UPDATED_LIST:
      return { ...state, updatedList: payload };
    default:
      return state;
  }
};

export default setMovieListReducer;
