import {
  GET_REQUISITION,
  DETAIL_REQUISITION,
  DELETE_REQUISITION,
  ADD_REQUISITION,
  UPDATE_REQUISITION
} from "../actions/types";

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_REQUISITION:
      return {
        ...state,
        items: action.payload
      };

    case DELETE_REQUISITION:
      return {
        ...state,
        items: state.items.filter(items => items.id !== action.payload)
      };

    case DETAIL_REQUISITION:
      return {
        ...state,
        item: action.payload
      };
    case ADD_REQUISITION:
      return {
        ...state,
        item: action.payload
      };

    // case UPDATE_REQUISITION:{
    //             let { requisition } = action.data;

    //             //clone the current state
    //             let clone = JSON.parse(JSON.stringify(state.requisitions));

    //             //check if bookmark already exist
    //             const index = clone.findIndex((obj) => obj.id === requisition.id);

    //             //if the requisition is in the array, update the requisition
    //             if (index !== -1) clone[index] = requisition;

    //             return {...state, requisitions: clone};
    //         };

    default:
      return state;
  }
}
