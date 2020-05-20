import {
  GET_SEEDLING,
  DETAIL_SEEDLING,
  DELETE_SEEDLING,
  ADD_SEEDLING,
  UPDATE_SEEDLING
} from "../actions/types";

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SEEDLING:
      return {
        ...state,
        items: action.payload
      };

    case DELETE_SEEDLING:
      return {
        ...state,
        items: state.items.filter(items => items.id !== action.payload)
      };

    case DETAIL_SEEDLING:
      return {
        ...state,
        item: action.payload
      };
    case ADD_SEEDLING:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}
