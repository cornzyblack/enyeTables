import {combineReducers} from 'redux';
import addUserReducer from "./addUserReducer"

const combinedReducers=combineReducers({
    users:addUserReducer
})

export default combinedReducers;

