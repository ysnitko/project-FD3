import { SET_CATEGORY_TYPES } from '../constants';

export const setCategoryTypes = (categoryType) => {
  return {
    type: SET_CATEGORY_TYPES,
    payload: categoryType,
  };
};
