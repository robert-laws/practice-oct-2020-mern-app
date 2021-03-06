import {
  GET_ITEMS,
  GET_ITEM_BY_ID,
  ADD_ITEM,
  UPDATE_ITEM,
  DELETE_ITEM,
  CLEAR_ITEM,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        technologyData: action.payload,
      };

    case GET_ITEM_BY_ID:
      return {
        ...state,
        technologyItem: state.technologyData.find(
          (item) => item.id.toString() === action.payload
        ),
      };

    case ADD_ITEM:
      return {
        ...state,
        technologyData: [...state.technologyData, action.payload],
      };

    case UPDATE_ITEM:
      return {
        ...state,
        technologyData: state.technologyData.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };

    case DELETE_ITEM:
      return {
        ...state,
        technologyData: state.technologyData.filter(
          (item) => item.id !== action.payload
        ),
      };

    case CLEAR_ITEM:
      return {
        ...state,
        technologyItem: null,
      };

    default:
      return state;
  }
};
