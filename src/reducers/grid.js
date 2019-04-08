import {
    EXPAND_GRID,
    INIT_GRID,
    SUBTRACT_GRID,
    DROP_PLANT, 
    REMOVE_PLANT,
    SAVE_SUCCESS,
    SAVE_ERROR,
    GET_USER_LAYOUT_DATA
} from '../actions/';
import { width } from "../components/Grid/styles"

const initialState = {
    numRows: 10,
    numCols: 10,
    grid: Array(10).fill(null).map(() => Array(10).fill(null).map(entry =>
        entry = { pictureLink: null })),
    canvasWidth: 10 * width,
    userHasLayouts: false,
    userLayouts: null,
    id: null,
    layouts: null,
    saveMessage: null,
    errorMessage: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case INIT_GRID:
            return {
                ...state,
                grid: action.grid,
                canvasWidth: action.canvasWidth,
                saveMessage: false,
                errorMessage: false
            }
        case GET_USER_LAYOUT_DATA:
            let userHasLayouts = action.payload.length > 0 ? true : false
            return{
                ...state,
                userHasLayouts: userHasLayouts,
                userLayouts: action.payload
            }
        case EXPAND_GRID:
        case SUBTRACT_GRID:
            return {
                ...state,
                numRows: action.numRows,
                numCols: action.numCols,
                canvasWidth: action.canvasWidth,
                grid: action.grid,
                saveMessage: false,
                errorMessage: false
            }
        case DROP_PLANT:
        case REMOVE_PLANT:
            return {
                ...state,
                grid: action.grid,
                saveMessage: false,
                errorMessage: false
            }
        case SAVE_SUCCESS:
            return {
                ...state,
                grid: action.layout,
                id: action.id,
                saveMessage: true,
                errorMessage: false
            }
        case SAVE_ERROR:
            return{
                ...state,
                errorMessage: true,
                saveMessage: false
            }
        default:
            return state
    }
}