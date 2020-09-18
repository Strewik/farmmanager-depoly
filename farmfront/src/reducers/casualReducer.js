import {
  GET_CASUAL,
  DELETE_CASUAL,
  DETAIL_CASUAL,
  ADD_CASUAL,
  UPDATE_CASUAL
} from "../actions/types";

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CASUAL:
      return {
        ...state,
        items: action.payload
      };

    case DELETE_CASUAL:
      return {
        ...state,
        items: state.items.filter(items => items.id !== action.payload)
      };

    case DETAIL_CASUAL:
      return {
        ...state,
        item: action.payload
      };

    default:
      return state;
  }
}
