import {UPDATE_PRODUCT} from './actions'

export const updateProduct = (id, title) => {
return {
    type: UPDATE_PRODUCT,
    payload : {productId : id, productTitle :  title}
}
}