import { combineReducers } from 'redux';
import favoriteMoviesReducer from './favoriteReducer';
import setPageNumbersReducer from './pageNumReducer';
import setCategoryReducer from './categoryTypesReducer';
import setMovieListReducer from './movieListReducer';

const reducer = combineReducers({
  favoriteMoviesReducer,
  setPageNumbersReducer,
  setCategoryReducer,
  setMovieListReducer,
});

export default reducer;
