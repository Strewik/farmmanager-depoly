import { GET_ADVANCE, DELETE_ADVANCE, DETAIL_ADVANCE } from "../actions/types";

const initialState = {
    items: [],
    item: {},
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ADVANCE:
            return {
                ...state,
                items: action.payload,
            };

        case DELETE_ADVANCE:
            return {
                ...state,
                items: state.items.filter(
                    (items) => items.id !== action.payload
                ),
            };

        case DETAIL_ADVANCE:
            return {
                ...state,
                item: action.payload,
            };

        default:
            return state;
    }
}
