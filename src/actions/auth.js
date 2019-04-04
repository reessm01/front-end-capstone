import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { push } from "connected-react-router";
import { downloadUserImage } from "."

// action types
export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const REGISTER = "REGISTER";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";

// const for logout
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT = "LOGOUT";
export const LOGOUT_FAIL = "LOGOUT_FAIL";

export const LOGOUTCURRENTUSER = "LOGOUTCURRENTUSER"


const url = domain + "/auth";

const login = loginData => dispatch => {
  dispatch({
    type: LOGIN
  });

  return fetch(url + "/login", {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify(loginData)
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: LOGIN_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
        console.log(err)
      return Promise.reject(
        dispatch({
          type: LOGIN_FAIL,
          payload: alert("Incorrect login or password.")
        })
      );
    });
};

 export const loginThenNavToProfile = loginData => (dispatch, getState) => { 
  return dispatch(login(loginData))
    .then(() => {
      const id = getState().auth.login.id
      return dispatch(downloadUserImage(id))
    }
    )
    .then(() => dispatch(push("/feed")));
};

const register = registerData => dispatch => {
  dispatch({
    type: REGISTER
  });

  return fetch(url + "/register", {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify(registerData)
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: REGISTER_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({
          type: REGISTER_FAIL,
          payload: alert(
            "That username has been taken. Please choose a different username."
          )
        })
      );
    });
};

export const registerThenNavToProfile = registerData => dispatch => {
  return dispatch(register(registerData))
    .then(() => dispatch(loginThenNavToProfile(registerData)));
};

export const logout = logoutData => (dispatch, getState) => {
  const token = getState().auth.login.token
  dispatch({
    type: LOGOUT
  });

  fetch(url + "/logout", {
    method: "GET",
    headers: {
      Authorization: "Bearer" + token,
    },
    body: JSON.stringify(logoutData)
  })
    .then(handleJsonResponse)
    .then(dispatch(push("/")))
    .then(result => {
      dispatch({
        type: LOGOUT_SUCCESS,
        payload: result

      })
    })
};
export const logoutThenGoToLogin = logoutData => dispatch => { return dispatch(logout(logoutData)).then(() => dispatch(push("/feed"))); };