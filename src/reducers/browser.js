import {
    WINDOW_LOADED,
    WINDOW_RESIZED
} from "../actions/";


const initialState = {
    width: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case WINDOW_LOADED:
        case WINDOW_RESIZED:
            return { 
                ...state, 
                width: action.payload
            }

        default:
            return state;
    }
};