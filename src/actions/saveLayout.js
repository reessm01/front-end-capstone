import { store } from "../index"
import { jsonHeaders, domain, handleJsonResponse } from "./constants";

export const SAVE_SUCCESS = 'SAVE SUCCESS'
export const SAVE_ERROR = 'SAVE ERROR'

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
            return dispatch({
                type: SAVE_SUCCESS,
                layout: result.layout.layout,
                id: result.layout.id
            });
        })
        .catch(err => {
            console.log(err)
            return Promise.reject(
                dispatch({
                    type: SAVE_ERROR
                })
            );
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
