import counterReducer from './counter/counterReducer';
import userReducer from './users/userReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    counterReducer : counterReducer,
    userReducer : userReducer
})
export default rootReducer;

/*
useReducer(userReducer, {})

const userReducer = () {
    
}

*/