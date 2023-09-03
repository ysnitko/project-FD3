import { combineReducers } from 'redux';
import favoriteMoviesReducer from './favoriteReducer';
import setPageNumbersReducer from './pageNumReducer';

const reducer = combineReducers({
  favoriteMoviesReducer,
  setPageNumbersReducer,
});

export default reducer;
