import {
  GET_HARVEST,
  DELETE_HARVEST,
  DETAIL_HARVEST,
  ADD_HARVEST,
  UPDATE_HARVEST
} from "../actions/types";

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_HARVEST:
      return {
        ...state,
        items: action.payload
      };

    case DELETE_HARVEST:
      return {
        ...state,
        items: state.items.filter(items => items.id !== action.payload)
      };

    case DETAIL_HARVEST:
      return {
        ...state,
        item: action.payload
      };

    default:
      return state;
  }
}
