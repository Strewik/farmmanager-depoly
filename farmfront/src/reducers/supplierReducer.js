import {
  GET_SUPPLIER,
  DELETE_SUPPLIER,
  DETAIL_SUPPLIER,
  ADD_SUPPLIER,
  UPDATE_SUPPLIER
} from "../actions/types";

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SUPPLIER:
      return {
        ...state,
        items: action.payload
      };

    case DELETE_SUPPLIER:
      return {
        ...state,
        items: state.items.filter(items => items.id !== action.payload)
      };

    case DETAIL_SUPPLIER:
      return {
        ...state,
        item: action.payload
      };

    default:
      return state;
  }
}
