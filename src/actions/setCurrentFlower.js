export const setCurrentFlower = (flowerData) => (dispatch) => {
    dispatch({type: SETCURRENTLOWER, flower: flowerData})
}

export const SETCURRENTLOWER = 'SETCURRENTFLOWER';