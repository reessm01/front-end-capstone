import { store } from "../index"

export const DROP_PLANT = 'DROP_PLANT';

export const dropPlant = (i, j) => dispatch => {
    let newGrid = Array.from(store.getState().grid.grid)
    newGrid[i][j].pictureLink = "https://proflowers.wpengine.com/wp-content/plugins/pf-flowertypes/image/winter-aconite-720790.jpg"
    console.log(newGrid)
    return dispatch({
        type: DROP_PLANT,
        grid: newGrid
    })
}