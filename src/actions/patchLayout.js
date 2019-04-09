import { store } from "../index"
import { jsonHeaders, domain } from "./constants";
import { getUserLayoutData } from "./getUserLayoutData";

export const PATCH_SUCCESS = 'PATCH SUCCESS'
export const PATCH_ERROR = 'PATCH ERROR'

export const patchLayout = (layout, id) => dispatch => {
    const token = store.getState().auth.login.token
    const userId = store.getState().auth.login.id

    return fetch(domain + "/layouts/" + id, {
        method: "PATCH",
        body: JSON.stringify({ layout: layout }),
        headers: {
            ...jsonHeaders,
            Authorization: `Bearer ${token}`
        }
    })  
        .then(result => {
            console.log(result)
            if(result.status === 200) dispatch(getUserLayoutData(userId))
            // return dispatch({
            //     // type: PATCH_SUCCESS,
            //     // layout: result.layout.layout,
            //     // id: result.layout.id
            // });
        })
        // .catch(err => {
        //     console.log(err)
        //     return Promise.reject(
        //         dispatch({
        //             type: PATCH_ERROR
        //         })
        //     );
        // });

}