import { store } from "../index"
import { jsonHeaders, domain, handleJsonResponse } from "./constants";

export const LOAD_SUCCESS = 'LOAD SUCCESS'
export const LOAD_ERROR = 'LOAD ERROR'

export const loadLayout = (name, layout) => dispatch => {
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
                type: LOAD_SUCCESS,
                layout: result.layout.layout,
                id: result.layout.id
            });
        })
        .catch(err => {
            console.log(err)
            return Promise.reject(
                dispatch({
                    type: LOAD_ERROR
                })
            );
        });

}