import { createStore, compose, applyMiddleware } from "redux";

import rootReducer from "./rootReducer";

import logger from "redux-logger";

import {thunk} from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store= createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));
export default store;
