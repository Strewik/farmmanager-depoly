import {
  GET_FARM,
  DELETE_FARM,
  DETAIL_FARM,
  ADD_FARM,
  UPDATE_FARM
} from "../actions/types";

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_FARM:
      return {
        ...state,
        items: action.payload
      };

    case DELETE_FARM:
      return {
        ...state,
        items: state.items.filter(items => items.id !== action.payload)
      };

    case DETAIL_FARM:
      return {
        ...state,
        item: action.payload
      };

    default:
      return state;
  }
}

// case ADD_FARM:
//   return {
//     ...state,
//     item: action.payload
//   };

// case UPDATE_FARM:{
//             let { FARM } = action.data;

//             //clone the current state
//             let clone = JSON.parse(JSON.stringify(state.FARMs));

//             //check if bookmark already exist
//             const index = clone.findIndex((obj) => obj.id === FARM.id);

//             //if the FARM is in the array, update the FARM
//             if (index !== -1) clone[index] = FARM;

//             return {...state, FARMs: clone};
//         };
