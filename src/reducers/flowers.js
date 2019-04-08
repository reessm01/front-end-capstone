import {
    GET_FLOWER_DATA,
    GET_FLOWER_DATA_SUCCESS,
    GET_FLOWER_DATA_FAIL,
    FILTER_FLOWERS
} from "../actions/";


const initialState = {
    flower: [],
    error: { message: "" },
    username: "",
    token: "",
    filteredFlowers: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_FLOWER_DATA:
            return state;
        case GET_FLOWER_DATA_SUCCESS:
            return { ...state, flower: action.flower }
        case GET_FLOWER_DATA_FAIL:
            return { ...state, error: action.error }
        case FILTER_FLOWERS:
            return {
                ...state,
                filteredFlowers: action.payload
            }
        default:
            return state;
    }
};