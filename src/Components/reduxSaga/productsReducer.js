import { GET_PRODUCTS, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_ERROR, UPDATE_PRODUCT } from './actions';
const initialState = {
    products: [],
    isErrorOccured: false
}
export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS_SUCCESS:
            return {
                products: action.payload,
                isErrorOccured: false
            }
        case GET_PRODUCTS_ERROR:
            return {
                products: [],
                isErrorOccured: true
            }
        case UPDATE_PRODUCT:
            let products = state.products;
            for(let i=0;i<products.length;i++){
                if(products[i].id == action.payload.productId){
                    products[i].title = action.payload.productTitle;
                }
            }
            return {...state, products : products};

        default:
            return state;
    }

}