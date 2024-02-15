import {createStore, applyMiddleware} from 'redux';
import { productReducer } from './productsReducer';
import productsSaga from './productsSaga';

import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(productReducer,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(productsSaga);