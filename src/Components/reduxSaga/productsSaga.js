import {put, takeEvery, takeLatest} from 'redux-saga/effects';
import axios from 'axios';

function* getProducts() {
    try {
        const response = yield axios.get('https://fakestoreapi.com/products').then(response => response);
        yield put({ type: 'GET_PRODUCTS_SUCCESS', payload: response.data })
    } catch (error) {
       yield put({ type: 'GET_PRODUCTS_ERROR', payload: error })
    }


}
function* getUsers(){
    try{
        const data = yield axios.get('https://fakestoreapi.com/products').then(response => response);
       yield put({type : 'GET_PRODUCTS_SUCCESS', payload : data})
    } catch (error) {
       yield put({ type: 'GET_PRODUCTS_GET_ERROR', payload: error })
    }
  
   
}

export default function* productsSaga(){
    yield takeLatest('GET_PRODUCTS', getProducts);
    yield takeLatest('GET_USERS', getUsers)
    
}