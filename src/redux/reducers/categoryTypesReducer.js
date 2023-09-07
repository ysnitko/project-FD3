import { SET_CATEGORY_TYPES } from '../constants';

const setCategoryReducer = (
  state = { currentCategory: 'All' },
  { type, payload }
) => {
  switch (type) {
    case SET_CATEGORY_TYPES:
      return { ...state, currentCategory: payload };
    default:
      return state;
  }
};

export default setCategoryReducer;
