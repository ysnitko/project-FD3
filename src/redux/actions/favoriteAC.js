import { ADD_FAVORITE_MOVIES, REMOVE_FAVORITE_MOVIES } from '../constants';

export const addFavoriteMovies = (movie) => {
  return {
    type: ADD_FAVORITE_MOVIES,
    payload: movie,
  };
};

export const removeFavoriteMovies = (id) => {
  return {
    type: REMOVE_FAVORITE_MOVIES,
    payload: id,
  };
};
