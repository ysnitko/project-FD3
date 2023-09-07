import { SHOW_LOADER } from '../constants';

const showLoaderReducer = (
  state = { isShowLoader: false },
  { type, payload }
) => {
  switch (type) {
    case SHOW_LOADER:
      return { ...state, isShowLoader: payload };
    default:
      return state;
  }
};

export default showLoaderReducer;
