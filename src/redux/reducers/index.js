import { combineReducers } from 'redux';
import favoriteMoviesReducer from './favoriteReducer';
import setPageNumbersReducer from './pageNumReducer';
import setCategoryReducer from './categoryTypesReducer';
import setMovieListReducer from './movieListReducer';
import showLoaderReducer from './loaderReducer';

const reducer = combineReducers({
  favoriteMoviesReducer,
  setPageNumbersReducer,
  setCategoryReducer,
  setMovieListReducer,
  showLoaderReducer,
});

export default reducer;
