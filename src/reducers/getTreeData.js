import {
    GET_TREE_DATA,
    GET_TREE_DATA_SUCCESS,
    GET_TREE_DATA_FAIL,
    FILTER_TREES,
    
  } from "../actions/";
  
  
  
  const initialState = {
    tree: [],
    error: { message: "" },
    username: "",
    token: "",
    filteredTrees: null,
    currentTree: null
  };
  
  export default (state = initialState, action) => {
      switch (action.type) {
        case SETCURRENTLOWER:
              return { ...state, currentTree: action.flower }
        case GET_TREE_DATA:
          return state;
        case GET_TREE_DATA_SUCCESS:
          return { ...state, tree: action.tree };
        case GET_TREE_DATA_FAIL:
          return { ...state, error: action.error };
        case FILTER_TREES:
          return {
            ...state,
            filteredTrees: action.payload
          };
        default:
          return state;
      }
  };