import {
  GET_INCOME,
  DETAIL_INCOME,
  DELETE_INCOME,
  ADD_INCOME,
  UPDATE_INCOME
} from "../actions/types";

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_INCOME:
      return {
        ...state,
        items: action.payload
      };

    case DELETE_INCOME:
      return {
        ...state,
        items: state.items.filter(items => items.id !== action.payload)
      };

    case DETAIL_INCOME:
      return {
        ...state,
        item: action.payload
      };
    case ADD_INCOME:
      return {
        ...state,
        item: action.payload
      };

    // case UPDATE_INCOME:{
    //             let { income } = action.data;

    //             //clone the current state
    //             let clone = JSON.parse(JSON.stringify(state.incomes));

    //             //check if bookmark already exist
    //             const index = clone.findIndex((obj) => obj.id === income.id);

    //             //if the income is in the array, update the income
    //             if (index !== -1) clone[index] = income;

    //             return {...state, incomes: clone};
    //         };

    default:
      return state;
  }
}
