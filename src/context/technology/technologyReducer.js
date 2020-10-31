import { GET_ITEMS, ADD_ITEM, UPDATE_ITEM, DELETE_ITEM } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        technologyData: action.payload,
      };

    case ADD_ITEM:
      return {
        ...state,
        technologyData: [...state.technologyData, action.payload],
      };

    case UPDATE_ITEM:
      return {
        ...state,
        technologyData: [...state.technologyData, action.payload],
      };

    case DELETE_ITEM:
      return {
        ...state,
        technologyData: state.technologyData.filter(
          (item) => item.id !== action.payload
        ),
      };

    default:
      return state;
  }
};
