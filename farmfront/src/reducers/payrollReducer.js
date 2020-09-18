import {
  GET_PAYROLL,
  DETAIL_PAYROLL,
  DELETE_PAYROLL,
  ADD_PAYROLL,
  UPDATE_PAYROLL
} from "../actions/types";

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PAYROLL:
      return {
        ...state,
        items: action.payload
      };

    case DELETE_PAYROLL:
      return {
        ...state,
        items: state.items.filter(items => items.id !== action.payload)
      };

    case DETAIL_PAYROLL:
      return {
        ...state,
        item: action.payload
      };
    case ADD_PAYROLL:
      return {
        ...state,
        item: action.payload
      };

    // case UPDATE_PAYROLL:{
    //             let { payroll } = action.data;

    //             //clone the current state
    //             let clone = JSON.parse(JSON.stringify(state.payrolls));

    //             //check if bookmark already exist
    //             const index = clone.findIndex((obj) => obj.id === payroll.id);

    //             //if the payroll is in the array, update the payroll
    //             if (index !== -1) clone[index] = payroll;

    //             return {...state, payrolls: clone};
    //         };

    default:
      return state;
  }
}
