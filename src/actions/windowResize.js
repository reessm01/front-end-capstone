export const WINDOW_RESIZED = 'WINDOW RESIZED'
export const WINDOW_LOADED = 'WINDOW LOADED'

export const windowResized = windowWidth => dispatch => {
    dispatch({
        type: WINDOW_RESIZED,
        payload: windowWidth
    })
}

export const windowLoaded = windowWidth => dispatch => {
    dispatch({
        type: WINDOW_LOADED,
        payload: windowWidth
    })
}