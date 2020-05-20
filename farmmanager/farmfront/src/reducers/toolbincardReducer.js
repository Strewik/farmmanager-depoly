import {
  GET_TOOLBINCARD,
  DELETE_TOOLBINCARD,
  DETAIL_TOOLBINCARD,
  ADD_TOOLBINCARD,
  UPDATE_TOOLBINCARD
} from "../actions/types";

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TOOLBINCARD:
      return {
        ...state,
        items: action.payload
      };

    case DELETE_TOOLBINCARD:
      return {
        ...state,
        items: state.items.filter(items => items.id !== action.payload)
      };

    case DETAIL_TOOLBINCARD:
      return {
        ...state,
        item: action.payload
      };

    default:
      return state;
  }
}
