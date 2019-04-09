import { domain, handleJsonResponse } from "./constants"
import { preloadUserLayout } from "./loadLayout"

export const GET_USER_LAYOUT_DATA = "GET USER LAYOUT DATA"
export const GET_USER_LAYOUT_FAILED = "GET USER LAYOUT FAILED"

export const getUserLayoutData = id => dispatch => {
  return fetch(domain + "/layouts/" + id, {
    method: "GET"
  })
    .then(handleJsonResponse)
    .then(result => {
      let layoutById = result.layouts.map(element => {
        return {
          id: element.id,
          name: element.name,
          layout: element.layout,
          updated: deriveInt(element.updatedAt)
        }
      })
      dispatch({
        type: GET_USER_LAYOUT_DATA,
        payload: layoutById
      })
      return dispatch(preloadUserLayout(layoutById))
    })
  // .catch(err => {
  //     console.log(err)
  //     return Promise.reject(
  //         dispatch({
  //             type: GET_USER_LAYOUT_FAILED
  //         })
  //     );
  // }); 2019-04-08T19:08:58.225Z
}

function deriveInt(postgresqlDate) {
  let sum = 0
  let dateSection1 = postgresqlDate.slice(0, 10).split("-")
  let dateSection2 = postgresqlDate
    .slice(11, 16)
    .replace(".", ":")
    .split(":")
  dateSection1.forEach(entry => (sum = parseInt(entry, 10) + sum))
  dateSection2.forEach(entry => (sum = parseInt(entry, 10) + sum))
  console.log(dateSection1 + " " + dateSection2)
  return sum
}
