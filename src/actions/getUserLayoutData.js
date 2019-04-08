import { domain, handleJsonResponse } from "./constants";

export const GET_USER_LAYOUT_DATA = 'GET USER LAYOUT DATA'
export const GET_USER_LAYOUT_FAILED = 'GET USER LAYOUT FAILED'

export const getUserLayoutData = res => dispatch => {  
    console.log(res)

    return fetch(domain + "/layouts/" + res.id, {
        method: "GET"
    })  
        .then(handleJsonResponse)
        .then(result => {
            let layoutById = result.layouts.map(element => {
                return { id: element.id, name: element.name, layout:element.layout }
            })
            return dispatch({
                type: GET_USER_LAYOUT_DATA,
                payload: layoutById
            });
        })
        // .catch(err => {
        //     console.log(err)
        //     return Promise.reject(
        //         dispatch({
        //             type: GET_USER_LAYOUT_FAILED
        //         })
        //     );
        // });

}