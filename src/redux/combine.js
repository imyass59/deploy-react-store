import {combineReducers} from 'redux'
import CountReducer from './reducers/CountReducer';
import LoginReducer from './reducers/LoginReducer';

const allReducers = combineReducers({
    Counter : CountReducer,
    LoginIn : LoginReducer
})
export default allReducers