import {
  GET_TOOL,
  DELETE_TOOL,
  DETAIL_TOOL,
  ADD_TOOL,
  UPDATE_TOOL
} from "../actions/types";

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TOOL:
      return {
        ...state,
        items: action.payload
      };

    case DELETE_TOOL:
      return {
        ...state,
        items: state.items.filter(items => items.id !== action.payload)
      };

    case DETAIL_TOOL:
      return {
        ...state,
        item: action.payload
      };

    default:
      return state;
  }
}
