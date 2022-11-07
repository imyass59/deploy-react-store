import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
//import CountReducer from './reducers/CountReducer';
import allReducers from './combine';


const store = createStore(allReducers,composeWithDevTools());

export default store;