import { createStore, compose, applyMiddleware } from "redux";
import counterReducer from './counterReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store= createStore(counterReducer, composeEnhancers(applyMiddleware()));
export default store;
