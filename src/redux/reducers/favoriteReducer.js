import { ADD_FAVORITE_MOVIES, REMOVE_FAVORITE_MOVIES } from '../constants';

const favoriteMoviesReducer = (
  state = { favoriteMovies: [] },
  { type, payload }
) => {
  switch (type) {
    case ADD_FAVORITE_MOVIES:
      return { ...state, favoriteMovies: [...state.favoriteMovies, payload] };
    case REMOVE_FAVORITE_MOVIES:
      return {
        ...state,
        favoriteMovies: state.favoriteMovies.filter(
          (movie) => movie.id !== payload
        ),
      };
    default:
      return state;
  }
};

export default favoriteMoviesReducer;
