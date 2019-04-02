import {
    EXPAND_GRID,
    INIT_GRID,
    SUBTRACT_GRID,
    DROP_PLANT
} from '../actions/';
import { width } from "../components/Grid/styles"

const initialState = {
    numRows: 10,
    numCols: 10,
    grid: Array(10).fill(null).map(() => Array(10).fill(null).map(entry=>
        entry = { pictureLink: null })),
    canvasWidth: 10 * width
}

export default (state = initialState, action) => {
    switch (action.type) {
        case INIT_GRID:
            return {
                ...state,
                grid: action.grid,
                canvasWidth: action.canvasWidth
            }
        case EXPAND_GRID:
        case SUBTRACT_GRID:
            return {
                ...state,
                numRows: action.numRows,
                numCols: action.numCols,
                canvasWidth: action.canvasWidth,
                grid: action.grid
            }
        case DROP_PLANT:
            return{
                ...state,
                grid: action.grid
            }
        default:
            return state
    }
}