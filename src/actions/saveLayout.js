import { store } from "../index"
import { jsonHeaders, domain, handleJsonResponse } from "./constants";

export const SAVE_LAYOUT = 'SAVE_LAYOUT'

export const saveLayout = (name, layout) => dispatch => {
    const token = store.getState().auth.login.token

    return fetch(domain + "/layouts/", {
        method: "POST",
        body: JSON.stringify({ layout: layout, name: name }),
        headers: {
            ...jsonHeaders,
            Authorization: `Bearer ${token}`
        }
    })  
        .then(handleJsonResponse)
        .then(result => {
            console.log(result.layout.layout)
            // return dispatch({
            //     // type: LOGIN_SUCCESS,
            //     // payload: result
            // });
        })
        .catch(err => {
            console.log(err)
            // return Promise.reject(
            //     dispatch({
            //         // type: LOGIN_FAIL,
            //         // payload: alert("Incorrect login or password.")
            //     })
            // );
        });

}

// {layout: {…}}
// layout:
// createdAt: "2019-04-05T17:52:01.348Z"
// id: 18
// layout: (10) [Array(10), Array(10), Array(10), Array(10), Array(10), Array(10), Array(10), Array(10), Array(10), Array(10)]
// name: "reser"
// updatedAt: "2019-04-05T17:52:01.348Z"
// userId: 2
// __proto__: Object
// __proto__: Object