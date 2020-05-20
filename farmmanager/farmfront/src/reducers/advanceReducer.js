import {
  GET_ADVANCE,
  DELETE_ADVANCE,
  DETAIL_ADVANCE,
  ADD_ADVANCE,
  UPDATE_ADVANCE
} from "../actions/types";

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ADVANCE:
      return {
        ...state,
        items: action.payload
      };

    case DELETE_ADVANCE:
      return {
        ...state,
        items: state.items.filter(items => items.id !== action.payload)
      };
       
    case DETAIL_ADVANCE:
      return {
        ...state,
        item: action.payload
      };

    default:
      return state;
  }
}

    // case ADD_ADVANCE:
    //   return {
    //     ...state,
    //     item: action.payload
    //   };

    // case UPDATE_ADVANCE:{
    //             let { advance } = action.data;

    //             //clone the current state
    //             let clone = JSON.parse(JSON.stringify(state.advances));

    //             //check if bookmark already exist
    //             const index = clone.findIndex((obj) => obj.id === advance.id);

    //             //if the advance is in the array, update the advance
    //             if (index !== -1) clone[index] = advance;

    //             return {...state, advances: clone};
    //         };
    
// function todoApp(state = initialState, action) {
//   switch (action.type) {
//     case SET_VISIBILITY_FILTER:
//       return Object.assign({}, state, {
//         visibilityFilter: action.filter
//       })
//     default:
//       return state
//   }
// } 

