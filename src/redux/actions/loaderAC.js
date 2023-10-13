import { SHOW_LOADER } from '../constants';

export const showLoader = (payload) => {
  return {
    type: SHOW_LOADER,
    payload: payload,
  };
};
