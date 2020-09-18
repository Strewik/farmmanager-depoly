import {
  GET_CUSTOMER,
  DELETE_CUSTOMER,
  DETAIL_CUSTOMER,
  ADD_CUSTOMER,
  UPDATE_CUSTOMER
} from "../actions/types";

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CUSTOMER:
      return {
        ...state,
        items: action.payload
      };

    case DELETE_CUSTOMER:
      return {
        ...state,
        items: state.items.filter(items => items.id !== action.payload)
      };

    case DETAIL_CUSTOMER:
      return {
        ...state,
        item: action.payload
      };

    default:
      return state;
  }
}
