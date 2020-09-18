import {
  GET_CONSUMABLE,
  DELETE_CONSUMABLE,
  DETAIL_CONSUMABLE,
  ADD_CONSUMABLE,
  UPDATE_CONSUMABLE
} from "../actions/types";

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CONSUMABLE:
      return {
        ...state,
        items: action.payload
      };

    case DELETE_CONSUMABLE:
      return {
        ...state,
        items: state.items.filter(items => items.id !== action.payload)
      };

    case DETAIL_CONSUMABLE:
      return {
        ...state,
        item: action.payload
      };

    default:
      return state;
  }
}
