import { SET_PAGE_NUMBERS } from '../constants';

export const setPageNumbers = (pageNum) => {
  return {
    type: SET_PAGE_NUMBERS,
    payload: pageNum,
  };
};
