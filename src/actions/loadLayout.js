import { store } from "../index"

export const LOAD_SUCCESS = 'LOAD SUCCESS'
export const LOAD_ERROR = 'LOAD ERROR'

export const loadLayout = id => dispatch => {
    let userLayouts = [...store.getState().grid.userLayouts]
    userLayouts.forEach(entry=> {
        if(entry.id === id) {
            dispatch({
                type: LOAD_SUCCESS,
                payload: entry
            })
        }
    })

}