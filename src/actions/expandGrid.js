import { store } from "../index"
import { width } from "../components/Grid/styles"

export const EXPAND_GRID = 'EXPAND_GRID';

export const expandGrid = id => dispatch => {
    let newGrid = Array.from(store.getState().grid.grid)
    let newRow = 0
    let newCol = 0
    let newWidth = width

    if (id === "col") {
        newCol = 1
        newGrid.map(row => row.push({ pictureLink: null }))
    } else {
        newRow = 1
        newWidth = 0
        newGrid.push(Array(store.getState().grid.numCols).fill({ pictureLink: null }))
    }

    return dispatch({
        type: EXPAND_GRID,
        numRows: this.state.numRows + newRow,
        numCols: this.state.numCols + newCol,
        canvasWidth: this.state.canvasWidth + newWidth,
        grid: newGrid
    })
}