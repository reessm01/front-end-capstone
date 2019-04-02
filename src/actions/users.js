import { domain, handleJsonResponse } from './constants';
import { push } from 'connected-react-router';

//Get User Actions//
export const SETCURRENTUSER = 'SETCURRENTUSER';
export const GETUSERS = 'GETUSERS';
export const GESTUSERS_SUCCESS = 'GETUSERS_SUCCESS';

//Update User Actions//
export const UPDATE = 'UPDATE';
export const UPDATE_SUCCESS = 'UPDATE_SUCCESS';
export const UPDATE_FAIL = 'UPDATE_FAIL';

//Delete User Actions//
export const DELETEUSER = 'DELETEUSER';
export const DELETEUSER_SUCCESS='DELETEUSER_SUCCESS';

//Get User Image Actions//
export const DOWNLOAD_USER_IMAGE = 'DOWNLOAD_USER_IMAGE';
export const DOWNLOAD_USER_IMAGE_SUCCESS = 'DOWNLOAD_USER_IMAGE_SUCCESS';

//Upload New User Image Actions//
export const UPLOADIMAGE = 'UPLOADIMAGE';
export const UPLOADIMAGE_SUCCESS = 'UPLOADIMAGE_SUCCESS';

const url = domain + '/users/';

export const user = id => dispatch => {
    return fetch(url + id)
    .then(handleJsonResponse)
    .then(result => {
        return dispatch({
            type: SETCURRENTUSER,
            payload: result.user
        });
    });
};

export const getUsers = () => dispatch => {
    dispatch({
        type: GETUSERS
    });
    return fetch(url + '?limit=10000')
    .then(handleJsonResponse)
    .then(result => {
        return dispatch({
            type: GESTUSERS_SUCCESS,
            payload: result
        });
    });
};

const userUpdate = newUserData => dispatch => {
    const token = newUserData.loginInfo.token
    dispatch({
        type: UPDATE
    });

    fetch(url, {
        method: 'PATCH',
        headers: {
            Authorization: 'Bearer' + token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUserData.state)
    })
    .then(res => {
        if (!res.ok) {
            res.json().then(err => {
                throw err;
            });
        };
        return res.json();
    });
        .then(result => {
        dispatch({
            type: UPDATE_SUCCESS,
            payload: result
        });
        //dispatch(push('/feed'));
    });
    .catch(err => {
        dispatch({
            type: UPDATE_FAIL,
            payload: alert("Update was unsuccessful.")
        });
    });
};

export const updateNavToProfile = newUserData => dispatch => {
    return dispatch(userUpdate(newUserData))
};
//Download the Current User Image//
export const downloadUserImage = id => (dispatch, getState) => {
    dispatch({
        type: DOWNLOAD_USER_IMAGE
    });
    return fetch(url + id + '/picture')
    .then(res => {
        return dispatch({
            type: DOWNLOAD_USER_IMAGE_SUCCESS,
            payload: result, id
        });
    });
};
//Upload a New User Image//
export const uploadImage = imageData => (dispatch, getState) => {
    const token = getState().auth.login.token
    dispatch({
        type: UPLOADIMAGE
    });
    return fetch(url + 'picture', {
        method: 'PUT',
        headers: {
            Authorization: 'Bearer' + token
        },
        body: imageData
    })
    .then(res => {
        if(res.status === 500) 
        {
            alert("Image failed to upload.")
        }
    });
    .then(result => {
        return dispatch({
            type: UPLOADIMAGE_SUCCESS,
            payload: result
        });
    });
};
//Update Account With Uploaded User Image//
export const updateUserImage = imageData => (dispatch, getState) => {
    return dispatch(uploadImage(imageData))
    .then(() => dispatch(downloadUserImage(getState().auth.login.id)))
};
//Delete User//
export const deleteUser = () => (dispatch, getState) => {
    const token = getState().auth.login.token;
    dispatch({
        type: DELETEUSER
    });
    fetch(url, {
        method: 'DELETE',
        headers: {
            Authorization: 'Bearer' + token,
            'Content-Type': 'application/json'
        },
    });
    .then(result => {
        dispatch({
            type: DELETEUSER_SUCCESS,
            payload: alert(getState().users.currentUsername + ' account has been deleted.')
        });
        return dispatch(push('/'));
    });
};