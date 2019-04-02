import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import auth from './auth'
import users from './users'
import grid from './grid'
//import messages from './messages';

export default history => 
    combineReducers({
        router: connectRouter(history),
        auth,
        users,
        grid
        //messages
    });