import {
    GET_VEGGIE_DATA,
    GET_VEGGIE_DATA_SUCCESS,
    GET_VEGGIE_DATA_FAIL,
    
} from "../actions/getVeggieData";


const initialState = {
    veggie: [],
    error: { message: "" },
    username: "",
    token: ""
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_VEGGIE_DATA:
            return state;
        case GET_VEGGIE_DATA_SUCCESS:
            return { ...state, veggie: action.veggie };
        case GET_VEGGIE_DATA_FAIL:
            return { ...state, error: action.error };
        default:
            return state;
    }
};