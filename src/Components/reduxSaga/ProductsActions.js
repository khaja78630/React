import { GET_PRODUCTS, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_ERROR } from './actions';

export const getProducts = () => {
    return {
        type: GET_PRODUCTS
    }
}

export const getProductsSuccess = (data) => {
    return {
        type: GET_PRODUCTS_SUCCESS,
        payload: data
    }
}

export const getProductsError = (data) => {
    return {
        type: GET_PRODUCTS_ERROR,
        payload: data
    }
}