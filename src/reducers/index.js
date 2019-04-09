import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import auth from './auth'
import users from './users'
import grid from './grid'
import flowers from './flowers'
import getVeggieData from './getVeggieData'
//import messages from './messages';

export default history => 
    combineReducers({
        router: connectRouter(history),
        auth,
        users,
        grid, 
        flowers,
        veggies: getVeggieData
        //messages
    });