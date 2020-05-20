import {
  GET_USER,
  DELETE_USER,
  DETAIL_USER,
  ADD_USER,
  UPDATE_USER
} from "../actions/types";

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        items: action.payload
      };

    case DELETE_USER:
      return {
        ...state,
        items: state.items.filter(items => items.id !== action.payload)
      };
       
    case DETAIL_USER:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}

    // case ADD_USER:
    //   return {
    //     ...state,
    //     item: action.payload
    //   };

    // case UPDATE_USER:{
    //             let { USER } = action.data;

    //             //clone the current state
    //             let clone = JSON.parse(JSON.stringify(state.USERs));

    //             //check if bookmark already exist
    //             const index = clone.findIndex((obj) => obj.id === USER.id);

    //             //if the USER is in the array, update the USER
    //             if (index !== -1) clone[index] = USER;

    //             return {...state, USERs: clone};
    //         };
    

