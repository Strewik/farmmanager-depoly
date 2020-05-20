import {
  GET_EMPLOYEE,
  DELETE_EMPLOYEE,
  DETAIL_EMPLOYEE,
  ADD_EMPLOYEE,
  UPDATE_EMPLOYEE
} from "../actions/types";

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_EMPLOYEE:
      return {
        ...state,
        items: action.payload
      };

    case DELETE_EMPLOYEE:
      return {
        ...state,
        items: state.items.filter(items => items.id !== action.payload)
      };

    case DETAIL_EMPLOYEE:
      return {
        ...state,
        item: action.payload
      };

    default:
      return state;
  }
}
