import { SET_PAGE_NUMBERS } from '../constants';

const setPageNumbersReducer = (
  state = { currentPage: 1 },
  { type, payload }
) => {
  switch (type) {
    case SET_PAGE_NUMBERS:
      return { ...state, currentPage: payload };
    default:
      return state;
  }
};

export default setPageNumbersReducer;
