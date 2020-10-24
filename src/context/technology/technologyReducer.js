import { GET_ALL_DATA } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_ALL_DATA:
      return {
        ...state,
        technologyData: action.payload,
      };

    default:
      return state;
  }
};
