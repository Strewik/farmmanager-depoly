import {
  GET_CONSUMABLEBINCARD,
  DELETE_CONSUMABLEBINCARD,
  DETAIL_CONSUMABLEBINCARD,
  ADD_CONSUMABLEBINCARD,
  UPDATE_CONSUMABLEBINCARD
} from "../actions/types";

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CONSUMABLEBINCARD:
      return {
        ...state,
        items: action.payload
      };

    case DELETE_CONSUMABLEBINCARD:
      return {
        ...state,
        items: state.items.filter(items => items.id !== action.payload)
      };

    case DETAIL_CONSUMABLEBINCARD:
      return {
        ...state,
        item: action.payload
      };

    default:
      return state;
  }
}
