import { combineReducers } from 'redux';
import favoriteMoviesReducer from './favoriteReducer';

const reducer = combineReducers({
  favoriteMoviesReducer,
});

export default reducer;
