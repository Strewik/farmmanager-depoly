import {
  GET_EXPENDITURE,
  DETAIL_EXPENDITURE,
  DELETE_EXPENDITURE,
  ADD_EXPENDITURE,
  UPDATE_EXPENDITURE
} from "../actions/types";

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_EXPENDITURE:
      return {
        ...state,
        items: action.payload
      };

    case DELETE_EXPENDITURE:
      return {
        ...state,
        items: state.items.filter(items => items.id !== action.payload)
      };

    case DETAIL_EXPENDITURE:
      return {
        ...state,
        item: action.payload
      };
    case ADD_EXPENDITURE:
      return {
        ...state,
        item: action.payload
      };

    // case UPDATE_EXPENDITURE:{
    //             let { expenditure } = action.data;

    //             //clone the current state
    //             let clone = JSON.parse(JSON.stringify(state.expenditures));

    //             //check if bookmark already exist
    //             const index = clone.findIndex((obj) => obj.id === expenditure.id);

    //             //if the expenditure is in the array, update the expenditure
    //             if (index !== -1) clone[index] = expenditure;

    //             return {...state, expenditures: clone};
    //         };

    default:
      return state;
  }
}
