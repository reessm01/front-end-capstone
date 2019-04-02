import { store } from "../index"

export const DROP_PLANT = 'DROP_PLANT';

export const dropPlant = (row, col, pictureLink) => dispatch => {
    let newGrid = Array.from(store.getState().grid.grid)
    pictureLink = pictureLink !== undefined ? pictureLink:"https://proflowers.wpengine.com/wp-content/plugins/pf-flowertypes/image/winter-aconite-720790.jpg"
    newGrid[row][col].pictureLink = pictureLink
   
    return dispatch({
        type: DROP_PLANT,
        grid: newGrid
    })
}